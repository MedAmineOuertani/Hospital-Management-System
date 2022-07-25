const Employee = require ('../models/employee');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const errorHandler = require('../utils/errorHandler');


//NOTE create a new employee 

exports.newEmployee = catchAsyncErrors(async(req,res,next)=>{
    const employee = await Employee.create(req.body);
    res.status(201).json({
        succcess:true,
        message:"Successfully created a neew employee",
        employee
    });
});

//NOTE show all the employees in the hospital

exports.showEmployees = catchAsyncErrors(async(req,res,next)=>{
    const employees = await Employee.find({});
    if(!employees){
        res.status(404).json({
            succcess:true,
            count :0,
            message:"No employee found"
        });
    }else{
        res.status(200).json({
            success:true,
            count: employees.length,
            employees
        });
    }
});