const express = require('express');
const router = express.Router();
const {isAuthenticatedUser} = require('../middlewares/auth');
const {showRooms} = require('../controllers/roomController');


router.route('/rooms').get(isAuthenticatedUser,showRooms);

module.exports = router;
