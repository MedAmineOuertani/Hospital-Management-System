const express = require('express');
const router =express.Router();
const {newAppointment,showAppointments} = require('../controllers/appointmentController'); 
const {
    isAuthenticatedUser
} = require('../middlewares/auth');

router.route('/appointment/new').post(isAuthenticatedUser, newAppointment);
router.route('/appointments').get(isAuthenticatedUser, showAppointments);




module.exports =router;