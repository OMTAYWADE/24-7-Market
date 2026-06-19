const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const SecurityEventService = require("./securityEventServices");

class AuthServices {
    static async register(data) {
        const existing = await UserModel.findByEmail(data.email);
        if (existing) { throw new Error("User already exists"); }
        const hash = await bcrypt.hash(data.password, 10);
        await UserModel.create({ username: data.username, email: data.email, password_hash: hash,});
        return { success: true, message: "User created successfully", };
    }

    static async login(data) {
        console.log("Data:", data);
        const user = await UserModel.findByEmail(data.email);
        console.log("user:", user);

        if (!user) {
            await SecurityEventService.create(null, "LOGIN_FAILED");
            throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare( data.password, user.password_hash );
        console.log("isMatch: ", isMatch);
        if (!isMatch) {
            await SecurityEventService.create( user.id,"LOGIN_FAILED" );
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign({ id: user.id, role: user.role, },
            process.env.JWT_SECRET, { expiresIn: "1h", });
        await SecurityEventService.create( user.id, "LOGIN_SUCCESS" );
        return { token };
    }
}

module.exports = AuthServices;