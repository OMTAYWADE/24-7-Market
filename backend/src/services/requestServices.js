const RequestModel = require('../models/requestModel');
const ProductModel = require('../models/productModel');

class RequestServices {
    static async create(productId, buyerId) {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Error("Product Not Found");
        }

        if (product.seller_id === buyerId) {
            throw new Error("Cnnot buy you own product");
        }

        const existing = await RequestModel.findByProductAndBuyer(productId, buyerId);
        if (existing) {
            throw new Error("Request already exists");
        }

        return await RequestModel.create({ productId: productId, buyer_id: buyerId });
    }

    static async getSellerRequests(sellerId) {
        return await RequestModel.getRequestsForSeller(sellerId);
    }

    static async accept(id) {
        return await RequestModel.updateStatus(id, "accepted");
    }

    static async reject(id) {
        return await RequestModel.updateStatus(id, "rejected");
    }
}

module.exports = RequestServices;