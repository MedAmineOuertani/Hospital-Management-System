const express = require('express');
const router =express.Router();
const {newAppointment} = require('../controllers/appointmentController'); 

router.route('/appointment/new').post(newAppointment);



module.exports =router;