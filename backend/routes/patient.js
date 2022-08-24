const express = require('express');
const router = express.Router();
const {
    showPatients,
    newPatient,
    newPatientPage,
    deletePatient,
    searchPatient
} = require('../controllers/patientController');
const {
    isAuthenticatedUser
} = require('../middlewares/auth');
router.route('/patients').get(isAuthenticatedUser, showPatients); //NOTE Show all patients
router.route('/patient').get(isAuthenticatedUser, searchPatient); //NOTE Search Patient by query
router.route('/patient/new').post(isAuthenticatedUser, newPatient); //NOTE Create a new patient
router.route('/patient/new').get(isAuthenticatedUser, newPatientPage); //NOTE Open the form to create a new patient 
router.route('/patient/delete').get(isAuthenticatedUser, deletePatient); //NOTE delete a specific patient 




module.exports = router;
