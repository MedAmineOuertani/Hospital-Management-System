const {newEmployee, showEmployees} = require('../controllers/employeeController');
const express = require('express');
const router = express.Router();


router.route('/employee/new').post(newEmployee);
router.route('/employees').get(showEmployees);


module.exports = router;