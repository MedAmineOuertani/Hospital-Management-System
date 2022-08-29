const express = require('express');
const router = express.Router();
const {isAuthenticatedUser} = require('../middlewares/auth');
const {showRooms, roomDetails} = require('../controllers/roomController');


router.route('/rooms').get(isAuthenticatedUser,showRooms);
router.route('/room').get(isAuthenticatedUser,roomDetails);

module.exports = router;
