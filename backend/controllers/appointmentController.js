const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Appointment = require('../models/appointment');
const Patient = require('../models/patient');
const errorHandler = require('../utils/errorHandler');
const Doctor = require('../models/doctor');
const APIFeatures = require('../utils/APIFeatures');


//NOTE create new appointment 
exports.newAppointment = catchAsyncErrors(async (req, res, next) => {
    let appointment = req.body;
    const patient = await Patient.findOne({
        fName: {
            $regex: appointment.fName,
            $options: 'i'
        },
        lName: {
            $regex: appointment.lName,
            $options: 'i'
        }
    });
    const doctor = await Doctor.findOne({
        fName: {
            $regex: appointment.doctorFName,
            $options: 'i'
        },
        lName: {
            $regex: appointment.doctorLName,
            $options: 'i'
        }

    });

    //NOTE check if the doctor and the patient already exist in the database 

    if (patient && doctor) {
        

        //NOTE check if there is not another appointment at the same time including the same doctor or the same patient 
        let exist = await Appointment.findOne({
            doctor_id: doctor._id,
            date: appointment.date,
            time: appointment.time
        }) || await Appointment.findOne({
            patient_id: patient._id,
            date: appointment.date,
            time: appointment.time
        });
        if (!exist) {
            const  doctorName= doctor.fName+" "+doctor.lName ;
            const patientName = patient.fName+" "+patient.lName ;
            let appointmentBody = {
                doctor_id: doctor._id,
                patient_id: patient._id,
                doctorName:doctorName,
                patientName:patientName,
                date: appointment.date,
                time: appointment.time
            }
            appointment = await Appointment.create(appointmentBody);
            res.redirect('/api/v1/appointments');

        } else {
            next(new errorHandler("Already existing appointment ! Check again", 400));
        }
    } else {
        next(new errorHandler('check the patient or the doctor credentials ', 404));

    }
});

exports.showAppointments = catchAsyncErrors(async (req, res, next) => {
    const appointments = await Appointment.find({}).sort({date:1});
    res.render('appointments', {
        appointments : appointments
    });
});


exports.newAppointmentPage = catchAsyncErrors(async (req, res, next) => {
    res.render('newAppointment');
});
exports.deleteAppointment = catchAsyncErrors (async(req,res,next)=>{
    const id= req.query.id;
    const appointment = await Appointment.findOneAndDelete({_id:id});
    res.redirect('/api/v1/appointments');
});

exports.searchAppointment = catchAsyncErrors(async(req,res,next)=>{
    const queryStr = req.query;
    let apiFeature= new APIFeatures(Appointment,queryStr).filter();
    const result = await apiFeature.query;
    if(!result){
        next(new errorHandler('nothing found'),404);
    }else{
        res.render('appointments',{appointments:result});
    }
});