const db = require('../config/db');

class UserModel{
    static async create(user) {
        const { username, email, password_hash } = user;
        const [result] = await db.execute(`
                INSERT INTO users (username, email, password_hash) VALUES (?,?,?)
            `, [username, email, password_hash]);
        return result;
    }

    static async findByEmail(email) {
        const [rows] = await db.execute(`
            SELECT * FROM users WHERE email = ? LIMIT 1
            `, [email]);
        return rows[0];
    }

    static async findById(id) {
        const [rows] = await db.execute(`
            SELECT id, username, email, role FROM users WHERE id= ? LIMIT 1
            `, [id]);
        return rows[0];
    }
}

module.exports = UserModel;