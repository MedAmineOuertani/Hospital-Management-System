const Doctor = require('../models/doctor');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/APIFeatures');
const errorHandler = require('../utils/errorHandler');



//NOTE create a new doctor 
exports.addDoctor = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const doctor = await Doctor.create(req.body);
    res.redirect('/api/v1/doctors');
});


//NOTE add Doctor Form 
exports.addDoctorForm = catchAsyncErrors(async( req,res,next)=>{
    res.render('newDoctor');
});


//NOTE get all the doctors in the hospital
exports.showDoctors = catchAsyncErrors(async (req, res, next) => {
    const doctors = await Doctor.find({});
    res.render('doctors',{doctors: doctors});
    

});

//NOTE  searching for a specific doctor 
exports.searchDoctor = catchAsyncErrors(async (req, res, next) => {
    const queryStr = req.query;
    let apiFeature = new APIFeatures(Doctor, queryStr).filter();
    const results = await apiFeature.query;
    if (results) {
        res.render('doctors',{doctors: results});
    } else {
        next(new errorHandler("something went wrong !", 404));
    }


});


//NOTE delete doctor 

exports.deleteDoctor = catchAsyncErrors(async (req, res, next) => {
    const id = req.query.id;
    const doctor = await Doctor.findOneAndDelete({
        _id: id
    });
    res.redirect('/api/v1/doctors');
});
