const SecurityEventModel = require("../models/securityEventModel");

class SecurityEventServices {
    static async create(userId, eventType) {
        return await SecurityEventModel.create(userId, eventType);
    }
    static async getAll() {
        return await SecurityEventModel.getAll();
    }
}

module.exports = SecurityEventServices;