const Employee = require ('../models/employee');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const errorHandler = require('../utils/errorHandler');
const APIFeatures = require('../utils/APIFeatures');


//NOTE create a new employee 

exports.newEmployee = catchAsyncErrors(async(req,res,next)=>{
    const employee = await Employee.create(req.body);
    res.redirect('/api/v1/employees');
});

//NOTE show all the employees in the hospital

exports.showEmployees = catchAsyncErrors(async(req,res,next)=>{
    const employees = await Employee.find({});
    if(employees){
        res.render('employees',{employees:employees});
    }else{
        next(new errorHandler("something went wrong",500));
    }
});
//NOTE search employees 
exports.searchEmployee = catchAsyncErrors(async(req,res,next)=>{
    const queryStr = req.query;
    let apiFeature = new APIFeatures(Employee,queryStr).filter();
    const employees = await apiFeature.query ;
    if(employees){
        res.render('employees',{employees:employees});
    }else{
        next( new errorHandler("something went wrong!",500));
    }


});

//NOTE Delete employee 
exports.deleteEmployee = catchAsyncErrors(async(req,res,next)=>{
    const id = req.query.id;
    const employee = await Employee.findOneAndDelete({_id:id});
    res.redirect('/api/v1/employees');
});


//NOTE new Employee page 
exports.newEmployeePage = catchAsyncErrors(async(req,res,next)=>{
    res.render('newEmployee');
});