const express = require('express');
const authRouter = express.Router();

const {signup, login, generateOTP, verifyOTP, logout} = require('../controllers/auth');
const authMiddleware = require('../middlewares/authMiddleware');

authRouter.post('/signup', signup);
authRouter.post('/login', login);

authRouter.post('/generate-otp', authMiddleware, generateOTP);
authRouter.post('/verify-otp', authMiddleware, verifyOTP);

authRouter.get('/logout', authMiddleware, logout);

module.exports = authRouter;
