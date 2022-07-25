const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
//const User = require('../models/user');
const errorHandler = require('../utils/errorHandler');


exports.getLoginPage = catchAsyncErrors(async(req,res,next)=>{
    res.sendFile("/home/amine/Desktop/Hospital-Management/backend/login.html",(err)=>{
        if(err){
            next( new errorHandler(err.message,404));
        }
    })
});

exports.checkUser = catchAsyncErrors(async(req,res,next)=>{
    console.log(req.body);
    if (req.body.username === "admin"){
        if(req.body.password === "admin"){
            res.redirect('/api/v1/doctors');
        }else{
            next(new errorHandler("process env is not working1",404));
        }
    }else{
        next(new errorHandler("process env is not working2",404));
    }
})