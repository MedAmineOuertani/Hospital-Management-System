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
    doctorName:{
        type:String,
        required:[true,"please neter the doctor name "]
    },
    patientName:{
        type:String,
        required:[true,"please enter the patient name"]
    },
    date:{
        type: Date,
        required: [true,"You need to specifiy the date"]
    },
    time:{
        type: String,
        required:[true,'Please enter the appointments time']
    }
});

module.exports = new mongoose.model('appointment', appointmentSchema);