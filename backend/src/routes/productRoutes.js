const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const validateProduct = require('../middleware/validateProduct');
const ProductController = require('../controllers/productController');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);

router.post('/', auth, validateProduct, ProductController.create);
router.delete('/:id', auth, ProductController.delete);

module.exports = router;