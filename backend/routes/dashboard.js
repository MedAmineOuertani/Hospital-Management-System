const express= require('express');
const router = express.Router();
const {showDashboard} = require('../controllers/dashboardController');
const{isAuthenticatedUser} = require('../middlewares/auth');


router.route('/dashboard').get(isAuthenticatedUser,showDashboard);


module.exports= router;