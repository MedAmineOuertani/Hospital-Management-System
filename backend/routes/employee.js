const {
    newEmployee,
    showEmployees,
    newEmployeePage,
    searchEmployee,
    deleteEmployee
} = require('../controllers/employeeController');
const express = require('express');
const router = express.Router();

const {
    isAuthenticatedUser
} = require('../middlewares/auth');

router.route('/employee/new').post(isAuthenticatedUser, newEmployee);
router.route('/employee/new').get(isAuthenticatedUser, newEmployeePage);
router.route('/employees').get(isAuthenticatedUser, showEmployees);
router.route('/employee').get(isAuthenticatedUser, searchEmployee);
router.route('/employee/delete').get(isAuthenticatedUser, deleteEmployee);


module.exports = router;