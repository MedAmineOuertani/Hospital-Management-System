const Patient = require('../models/patient');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.showPatients = catchAsyncErrors(async (req, res, next) => {
    const patients = await Patient.find({});
    res.render('patients',{patients:patients});
});

exports.newPatient = catchAsyncErrors(async (req, res, next) => {
    const patient = await Patient.create(req.body);
    res.status(200).json({
        success: true,
        message: "Successfully created a new patient"
    });
});

exports.searchPatient = catchAsyncErrors(async (req, res, next) => {

});

exports.deletePatient = catchAsyncErrors(async (req, res, next) => {

});
exports.newPatientPage = catchAsyncErrors(async (req, res, next) => {

});