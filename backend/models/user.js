const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter the user username'],
        maxlength: [30, 'username cannot exceed 30 characters']
    },
    password: {
        type: String,
        required: [true, 'Please Enter the user password'],
        maxlength: [30, 'password cannot exceed 30 characters'],
        select: false
    }
});
//NOTE Encrypting password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//NOTE Return JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
};
//ANCHOR Comparing passwords
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

module.exports = new mongoose.model('User', userSchema);