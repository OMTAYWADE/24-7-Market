const ProductModel = require('../models/productModel');

class ProductService{
    static async create(data) {
        return await ProductModel.create(data);
    }

    static async getAll() {
        return await ProductModel.findAll();
    }

    static async getById(id) {
        return await ProductModel.findById(id);
    }

    static async delete(productId, userId) {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }

        if (product.seller_id !== userId) {
            throw new Error("unauthorized");
        }
        return await ProductModel.delete(productId);
    }
}

module.exports = ProductService;