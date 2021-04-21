const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const BatchSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact_number:{
        type: String,
        required: true
    },
    batch_time: {
        type: String,
        required:true
    },
    date: {                         //new
        type:String,
        required:true
    },
    day:{                           //new
        type:String,
        required:true
    },
    packagee:{
        type:String,
        required:true
    },
    area:{                          //new
        type:String,
        required:true
    },
    catagory: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Batch', BatchSchema );   