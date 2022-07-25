const Patient = require('../models/patient');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.showPatients = catchAsyncErrors(async (req,res,next)=>{
    const patients = await Patient.find({});
    res.status(200).json({
        success: true,
        count: patients.length,
        patients
    })
});

exports.newPatient = catchAsyncErrors(async (req,res,next) =>{
    const patient = await Patient.create(req.body);
    res.status(200).json({
        success:true,
        message:"Successfully created a new patient"
    });
});