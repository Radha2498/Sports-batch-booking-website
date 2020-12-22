const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const ContactSchema = new Schema({
    uname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contact', ContactSchema );  