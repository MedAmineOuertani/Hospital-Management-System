const express = require('express');
const router = express.Router();
const {
    registerUser,
    registerPage,login,loginPage,logout
} = require('../controllers/authController');


router.route('/register').post(registerUser);
router.route('/register').get(registerPage);
router.route('/login').get(loginPage);
router.route('/login').post(login);
router.route('/logout').get(logout);
module.exports = router;
