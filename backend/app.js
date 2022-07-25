const express = require('express');
const app = express();
app.use(express.json());
const errorMiddleware = require('./middlewares/error');
const ejs = require ('ejs');
const bodyParser = require('body-parser');

app.use(express.static('./backend/public') );


app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.set('views','/home/amine/Desktop/Hospital-Management/backend/views');
app.set('view engine','ejs');


//NOTE importing all routes 
const doctor = require('./routes/doctor');
const patient = require('./routes/patient');
const appointment = require('./routes/appointment');
const employee = require('./routes/employee');
const login= require('./routes/login');

app.use('/api/v1',doctor);
app.use('/api/v1',patient);
app.use('/api/v1',appointment);
app.use('/api/v1',employee);
app.use('/api/v1',login)


//NOTE Middleware to handle errors 
app.use(errorMiddleware);

module.exports = app;