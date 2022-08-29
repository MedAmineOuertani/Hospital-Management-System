const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const errorHandler = require('../utils/errorHandler');
const APIFeatures = require('../utils/APIFeatures');
const Patient = require('../models/patient');

exports.showRooms = catchAsyncErrors(async(req,res,next)=>{
    let availableRooms = Array.from({
        length: 70
    }, (_, i) => i + 1); 

    const Patients = await Patient.find({});
    Patients.forEach((item) => {
        const index = availableRooms.indexOf(item.room);
        availableRooms.splice(index,1);
    });

    res.render('rooms',{availableRooms: availableRooms});
});

exports.roomDetails = catchAsyncErrors(async(req,res,next)=>{
    const room = req.query.room;
    const patient = await Patient.findOne({room: room});
    res.render('roomInfo',{patient: patient,room:room});
});