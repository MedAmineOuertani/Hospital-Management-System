const express = require('express');
const router = express.Router();
const {addDoctor , showDoctors ,searchDoctor, deleteDoctor,addDoctorForm} = require('../controllers/doctorController');


router.route('/doctor/new').post(addDoctor);
router.route('/doctor/new').get(addDoctorForm);
router.route('/doctors').get(showDoctors);
router.route('/doctor').get(searchDoctor);
router.route('/doctor/delete').get(deleteDoctor);

module.exports = router;
