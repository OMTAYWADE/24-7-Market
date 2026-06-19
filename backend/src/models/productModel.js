const db = require('../config/db');

class ProductModel{
    static async create(product) {
        const { title, description, price, category, contact_number, seller_id } = product;
        const [result] = await db.execute(`
            INSERT INTO products (title, description, price, category, contact_number, seller_id) VALUES(?, ?, ?, ?, ?, ?)
            `, [title, description, price, category, contact_number, seller_id]);
        return result;
    }

    static async findAll() {
        const [rows] = await db.execute(`
           SELECT * FROM products ORDER BY created_at DESC 
            `);
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.execute(`
            SELECT * FROM products WHERE id = ? LIMIT 1
            `, [id]);
        return rows[0];
    }

    static async delete(id) {
        const [result] = await db.execute(`
            DELETE FROM products WHERE id=?
            `, [id]);
        return result;
    }
}

module.exports = ProductModel;