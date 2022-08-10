const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "Please enter the employee's First Name "],
        maxlength: [30, "Employee's first name cannot exceed 30 characters"]
    },
    lName: {
        type: String,
        required: [true, "Please enter the employee's Last Name "],
        maxlength: [30, "Empoloyee's last name cannot exceed 30 characters"]
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please Enter the employee's date of birth"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please Enter the employee's phone number"]
    },
    sex: {
        type: String,
        enum: {
            values: ["Male", "Female"],
            message: "Please the patient's sex"
        }
    },
    salary: {
        type: Number,
        required: [true, "Enter the employee's salary"]
    }/*,
    avatar: {
        public_id: {
            type: String,
            requierd: true,
            default: ''
        },
        url: {
            type: String,
            required: true,
            default: ''
        }
    }*/
    ,
    role:{
        type:String,
        required:[true,"please enter the employees role"]
    }
});

module.exports = new mongoose.model('employee', employeeSchema);