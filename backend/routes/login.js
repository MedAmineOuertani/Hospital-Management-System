const express = require ('express');
const router = express.Router();
const {getLoginPage, checkUser} = require ('../controllers/loginController');


router.route('/login').get(getLoginPage);
router.route('/login').post(checkUser);


module.exports = router;