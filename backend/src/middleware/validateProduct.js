const validateProduct = (req, res, next) => {
    const { title, description, price, contact_number } = req.body;
    if (!title || !description || !price || !contact_number) {
        return res.status(400).json({ success: false, message: "All field are required" });
    }
    next();
};

module.exports = validateProduct;