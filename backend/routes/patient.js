const express = require('express');
const router = express.Router();
const {showPatients, newPatient} = require('../controllers/patientController');

router.route('/patients').get(showPatients);
router.route('/patient/new').post(newPatient);

module.exports = router;
