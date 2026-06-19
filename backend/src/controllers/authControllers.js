const AuthServices = require('../services/authServices');

class AuthController{
    static async register(req, res, next) {
        try {
            const result = await AuthServices.register(req.body);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const result = await AuthServices.login(req.body);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = AuthController;