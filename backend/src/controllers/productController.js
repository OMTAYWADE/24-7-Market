const ProductService = require('../services/productServices'); 
const SecurityEventServices = require('../services/securityEventServices');

class ProductController{
    static async create(req, res, next) {
        try {
            const result = await ProductService.create({ ...req.body, seller_id: req.user.id });
            await SecurityEventServices.create( req.user.id, "PRODUCT_CREATED" );
            res.status(201).json({ success: true, result });
        } catch (err) {
            next(err);
        }
    }

    static async getAll(req, res, next) {
        try {
            const products = await ProductService.getAll();
            res.json(products);
        } catch (err) {
            next(err);
        }
    }

    static async getById(req, res, next) {
        try {
            const product = await ProductService.getById(req.params.id);
            res.json(product);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            await ProductService.delete(req.params.id, req.user.id);
            await SecurityEventServices.create( req.user.id, "PRODUCT_DELETED");
            res.json({success: true, message: "Product deleted"})
        } catch (err) {
            next(err);
        }
    }
}

module.exports = ProductController;