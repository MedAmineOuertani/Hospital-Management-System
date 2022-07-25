const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "Please enter the patient First Name "],
        maxlength: [30, "patient's first name cannot exceed 30 characters"]
    },
    lName: {
        type: String,
        required: [true, "Please enter the patient Last Name "],
        maxlength: [30, "patient's last name cannot exceed 30 characters"]
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please Enter the patient's date of birth"]
    },
    sex:{
        type:String,
        enum :{
            values: ["Male","Female"],
            message: "Please the patient's sex"
        }
    },
    diseases: {
        type: Array,
        default: []
    },
    room:{
        type: Number,
        default:000
    }
});
module.exports = new mongoose.model('patient', patientSchema);