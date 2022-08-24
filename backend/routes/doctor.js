const express = require('express');
const router = express.Router();
const {
    addDoctor,
    showDoctors,
    searchDoctor,
    deleteDoctor,
    addDoctorForm
} = require('../controllers/doctorController');

const {
    isAuthenticatedUser
} = require('../middlewares/auth');


router.route('/doctor/new').post(isAuthenticatedUser, addDoctor);
router.route('/doctor/new').get(isAuthenticatedUser, addDoctorForm);
router.route('/doctors').get(isAuthenticatedUser, showDoctors);
router.route('/doctor').get(isAuthenticatedUser, searchDoctor);
router.route('/doctor/delete').get(isAuthenticatedUser, deleteDoctor);

module.exports = router;
