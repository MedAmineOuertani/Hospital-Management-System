const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Appointment = require('../models/appointment');
const Patient = require('../models/patient');
const errorHandler = require('../utils/errorHandler');
const Doctor = require('../models/doctor');


//NOTE create new appointment 
exports.newAppointment = catchAsyncErrors(async (req, res, next) => {
    let appointment = req.body;
    const patient = await Patient.findOne({
        _id: appointment.patient_id
    });
    const doctor = await Doctor.findOne({
        _id: appointment.doctor_id
    });
    /*res.status(200).json({
        success: true,
        patient,
        doctor
    });*/
    if (patient && doctor) { //NOTE check if the doctor and the patient already exist in the database 

        //NOTE check if there is not another appointment at the same time including the same doctor or the same patient 
        let exist = await Appointment.findOne({
            doctor_id: appointment.doctor_id,
            date: appointment.date
        }) || await Appointment.findOne({
            patient_id: appointment.patient_id,
            date: appointment.date
        });
        //console.log(exist);
        if (!exist) {
            appointment = await Appointment.create(req.body);
            res.status(201).json({
                success: true,
                message: "new Appointment has been created",
                appointment
            });
            
        } else {
            next(new errorHandler("Already existing appointment ! Check again", 400));
        }
    } else {
        next(new errorHandler("Check the doctor or the patient credentials again", 404));
    }
});

exports.showAppointments = catchAsyncErrors(async(req,res,next)=>{
    res.render('appointments');
});