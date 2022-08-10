const {newEmployee, showEmployees , newEmployeePage , searchEmployee, deleteEmployee} = require('../controllers/employeeController');
const express = require('express');
const router = express.Router();


router.route('/employee/new').post(newEmployee);
router.route('/employee/new').get(newEmployeePage);
router.route('/employees').get(showEmployees);
router.route('/employee').get(searchEmployee);
router.route('/employee/delete').get(deleteEmployee);


module.exports = router;