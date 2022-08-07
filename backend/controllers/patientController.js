const Patient = require('../models/patient');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const errorHandler = require ('../utils/errorHandler');
const APIFeatures = require('../utils/APIFeatures');

exports.showPatients = catchAsyncErrors(async (req, res, next) => {
    const patients = await Patient.find({});
    res.render('patients',{patients:patients});
});

exports.newPatient = catchAsyncErrors(async (req, res, next) => {
    const patient = await Patient.create(req.body);
    res.redirect("/api/v1/patients");
});

exports.searchPatient = catchAsyncErrors(async (req, res, next) => {
    const query = req.query ;
    let apiFeature = new APIFeatures(Patient , query).filter();
    const results = await apiFeature.query;
    if(results){
        res.render('patients',{patients:results});
    }else{
        next(new errorHandler("somethingwent wrong !", 404));
    }

});

exports.deletePatient = catchAsyncErrors(async (req, res, next) => {
    const id = req.query.id;
    const result = await Patient.findOneAndDelete({_id:id});
    if(result){
        res.redirect('/api/v1/patients');
    }else{
        next(new errorHandler("something went wrong" , 404));
    }
});
exports.newPatientPage = catchAsyncErrors(async (req, res, next) => {
    res.render("newPatient");
});