const router = require('express').Router();
const AuthController = require('../controllers/authControllers');

const { loginLimiter } = require('../middleware/rateLimiter');
const { validateRegister, validateLogin} = require('../middleware/validate');

router.post('/register',validateLogin, AuthController.register);
router.post('/login',loginLimiter, validateLogin, AuthController.login);

module.exports = router;