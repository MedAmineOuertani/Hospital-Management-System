const mongoose = require ('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctor_id:{
        type:String,
        required: true
    },
    patient_id:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        required: [true,"You need to specifiy the date"]
    }
});

module.exports = new mongoose.model('appointment', appointmentSchema);