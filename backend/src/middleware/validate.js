const UserModel = require('../models/userModel');
const validatePassword = require('../utils/validatePassword');

const validateRegister = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username?.trim() || !email?.trim() || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (username.length < 3) {
        return res.status(400).json({ success: false, message: "Username must be at least 3 characters" });
    }

    if (username.length > 30) {
        return res.status(400).json({ success: false, message: "Username is too long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: "Invalid email address" });
    }

    const existingUser = await UserModel.findByEmail(email);

    if (existingUser) {
        return res.status(409).json({ success: false, message: "Email already exists" });
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
        return res.status(400).json({ success: false, message: passwordError });
    }

    if (!req.is("application/json")) {
        return res.status(400).json({ success: false, message: "Content-Type must be application/json" });
    }

    next();
};

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }
    next();
}

module.exports = { validateRegister, validateLogin };