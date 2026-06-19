const db = require('../config/db');

class SecurityEvent {
    static async create(userId, eventType) {
        await db.execute(`
            INSERT INTO security_events (user_id, event_type) VALUES (?, ?)
            `, [userId, eventType]);
    }
    static async getAll() {

        const [rows] = await db.execute(`
                SELECT * FROM security_events ORDER BY created_at DESC
                `);
        return rows;
    }
}

module.exports = SecurityEvent;