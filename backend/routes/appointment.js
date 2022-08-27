const express = require('express');
const router =express.Router();
const {newAppointment,showAppointments, newAppointmentPage, deleteAppointment, searchAppointment} = require('../controllers/appointmentController'); 
const {
    isAuthenticatedUser
} = require('../middlewares/auth');

router.route('/appointment/new').post(isAuthenticatedUser, newAppointment);
router.route('/appointments').get(isAuthenticatedUser, showAppointments);
router.route('/appointment/new').get(isAuthenticatedUser,newAppointmentPage);
router.route('/appointment/delete').get(isAuthenticatedUser,deleteAppointment);
router.route('/appointment').get(isAuthenticatedUser,searchAppointment);




module.exports =router;