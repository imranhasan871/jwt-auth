const router = require('express').Router();
const authenticate = require('../middelware/authenticate');
const {
    loginPostController,
    signupPostController,
    getAllUsers,
} = require('../controller/authController');

router.get('/users', authenticate, getAllUsers);
router.post('/login', loginPostController);
router.post('/signup', signupPostController);

module.exports = router;
