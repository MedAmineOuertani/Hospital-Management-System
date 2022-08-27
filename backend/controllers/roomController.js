const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const errorHandler = require('../utils/errorHandler');
const APIFeatures = require('../utils/APIFeatures');

exports.showRooms = catchAsyncErrors(async(req,res,next)=>{
    res.render('rooms',{});
});