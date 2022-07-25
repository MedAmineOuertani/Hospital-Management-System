const app = require('./app');
const dotenv = require('dotenv');

//NOTE handle the uncaught exceptions(this always should be on top in the code so it can handle the uncaught exceptions)
process.on('uncaughtException', err => {
    console.log(`ERROR : ${err.message}`);
    console.log("uncaught exception error ,Shutting down the server...");
    process.exit(1);

});


dotenv.config({
    path: './backend/config/config.env'
});
const connectToDataBase = require('./config/database');


app.listen(process.env.PORT, function () {
    console.log(`Server is running on port : ${process.env.PORT}`);
});

connectToDataBase();


//ANCHOR handle unhandled promise rejections 
process.on('unhandledRejection', err => {
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to unhandled Promise rejection");
    server.close(() => {
        process.exit(1);
    });
})