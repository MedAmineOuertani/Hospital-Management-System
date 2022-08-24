const mongoose = require('mongoose');

const connectToDataBase=() => {
    mongoose.connect(process.env.DB_LOCAL_URL,{useNewUrlParser: true}).then(con => {
        console.log('Successfully Connected to the Hospital Database !');
    });
}

module.exports = connectToDataBase;