const errorHandler =  require('../utils/errorHandler');
 module.exports = (err,req,res,next) => {
     err.statuscode= err.statuscode || 500;
     err.message = err.message || "Internal Server Error";
     if(process.env.NODE_ENV ==='DEVELOPMENT'){
         res.status(err.statuscode).json({
             success: false,
             error: err,
             message: err.message,
             stack: err.stack
         });
     }
     if(process.env.NODE_ENV === 'PRODUCTION') {
         let error = err;
         //NOTE wrong mongoose ID error 
         if(err.name == 'CastError'){
             const message = `Resources not found . Invalid : ${err.path}`;
             error = new errorHandler(message , 400);
         }
         //NOTE handling mongoose validation error
         if(err.name == 'ValidationError'){
             const message = Object.values(err.errors).map(value=>value.message);
             error = new errorHandler(message , 400);
         }

         res.status(error.statuscode).json({
             success:false,
             message: error.message
         })
     }
 }