const RequestServices = require('../services/requestServices');

class RequestController{
    static async create(req, res, next) {
        try {
            const result = await RequestServices.create(req.params.productId, req.user.id);
            res.status(201).json({ success: true, message: "Request Sent", result });
        } catch (err) {
            next(err);
        }
    }

    static async getSellerRequests(req, res, next) {
        try {
            const requests = await RequestServices.getSellerRequests(req.user.id);
            res.json(requests);
        } catch (err) {
            next(err);
        }
    }

    static async accept(req, res, next) {
        try {
            await RequestServices.accept(req.params.id);
            res.json({ success: true, message: "Request accepted" });
        } catch (err) {
            next(err);
        }
    }

    static async reject(req, res, next) {
        try {
            await RequestServices.reject(req.params.id);
            res.json({ success: true, message: "Request rejected" });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = RequestController;