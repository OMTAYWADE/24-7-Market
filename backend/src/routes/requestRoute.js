const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const RequestController = require('../controllers/requestControllers');

router.post('/:productId', auth, RequestController.create);

router.get('/', auth, RequestController.getSellerRequests);

router.patch("/:id/accept", auth, RequestController.accept);
router.patch("/:id/reject", auth, RequestController.reject);

module.exports = router;