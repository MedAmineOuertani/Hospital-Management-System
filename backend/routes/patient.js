const express = require('express');
const router = express.Router();
const {showPatients, newPatient, newPatientPage , deletePatient , searchPatient} = require('../controllers/patientController');

router.route('/patients').get(showPatients); //NOTE Show all patients
router.route('/patient').get(searchPatient); //NOTE Search Patient by query
router.route('/patient/new').post(newPatient); //NOTE Create a new patient
router.route('/patient/new').get(newPatientPage); //NOTE Open the form to create a new patient 
router.route('/patient/delete').get(deletePatient); //NOTE delete a specific patient 




module.exports = router;
