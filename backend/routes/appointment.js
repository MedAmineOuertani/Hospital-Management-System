const express = require('express');
const router =express.Router();
const {newAppointment,showAppointments} = require('../controllers/appointmentController'); 

router.route('/appointment/new').post(newAppointment);
router.route('/appointments').get(showAppointments);




module.exports =router;