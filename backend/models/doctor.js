const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'Please Enter the doctor First Name '],
        maxlength: [30, 'the doctor name cannot exceed 30 characters']
    },
    lName: {
        type: String,
        required: [true, 'Please Enter the doctor Last Name '],
        maxlength: [30, 'the doctor Last Name cannot exceed 30 characters']
    },
    speciality: {
        type: String,
        requierd: [true, 'Please Enter the doctor Speciality']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please Enter the date of Birth']
    },
    sex:{
        type:String,
        enum :{
            values: ["Male","Female"],
            message: "Please the patient's sex"
        }
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Enter the doctor phone Number']
    },
    avatar: {
            type: String,
            //required: true,
            default: 'https://cdn5.vectorstock.com/i/thumb-large/54/69/male-user-icon-vector-8865469.jpg'
    },
    salary: {
        type: Number,
        required: [true, "Enter the docotor's Salary"]
    }

});


module.exports = new mongoose.model('doctor', doctorSchema);