const SecurityEventServices = require("../services/securityEventServices");

class SecurityEventController {
    static async getAll(req, res, next) {
        try {
            const events = await SecurityEventServices.getAll();
            res.json(events);
        } catch (err) {
            next(err);
        }
    }
}
module.exports = SecurityEventController;