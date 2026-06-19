const db = require('../config/db');

class RequestModel{
    static async create({ productId, buyer_id }) {
        const [result] = await db.execute(`
           INSERT INTO buy_requests (product_id, buyer_id) VALUES(?, ?)
            `, [productId, buyer_id]);
        return result;
    }

    static async findByProductAndBuyer({ product_id, buyer_id }) {
        const [rows] = await db.execute(`
            SELECT * FROM buy_requests WHERE product_id=? AND buyer_id=? LIMIT 1
            `, [product_id, buyer_id]);
        return rows[0];
    }

    static async getRequestsForSeller(seller_id) {
        const [rows] = await db.execute(`
            SELECT br.*, p.title, u.username FROM buy_requests br
            JOIN products p ON p.id = br.product_id
            JOIN users u ON u.id = br.buyer_id WHERE p.seller_id = ?
            `, [seller_id]);
        return rows;
    }

    static async updateStatus(id, status) {
        const [result] = await db.execute(`
            UPDATE buy_requests SET status=? WHERE id=?
            `, [status, id]);
        return result;
    }
}

module.exports = RequestModel;