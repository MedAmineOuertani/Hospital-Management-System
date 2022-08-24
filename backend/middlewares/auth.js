const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//ANCHOR check if user is authenticated or not 
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const {
        token
    } = req.cookies;
    if(!token){
        res.redirect('/api/v1/login');
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();

});