const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const errorHandler = require('../utils/errorHandler');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const Appointment = require('../models/appointment');
const Employee = require('../models/employee');



module.exports.showDashboard = catchAsyncErrors(async(req,res,next)=>{
    const patients = await Patient.find({});
    const doctors = await Doctor.find({});
    let date = new Date(Date.now());
    const appointments = await Appointment.find({date:{$gte: date}})

    //NOTE Available Rooms
    let availableRooms = Array.from({
        length: 70
    }, (_, i) => i + 1); 

    const Patients = await Patient.find({});
    Patients.forEach((item) => {
        const index = availableRooms.indexOf(item.room);
        availableRooms.splice(index,1);
    });

    res.render('dashboard',{patients:patients,doctors:doctors,appointments:appointments,availableRooms:availableRooms});
});