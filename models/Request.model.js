const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const RequestSchema = new Schema ({
    // date time channel language Im feeling...

    date: {
        type: Date,
        required: [true, "Please provide a valid date"]
      },
    time:{
        type: String,
        required: [true, "Please provide a valid time"]
      },
    phone:{
        type: String,
        required: [true, "Please provide a valid phone"]
      },
    language: {
        type: String,
        required: [true, "Please provide a valid language"]
      },
      feeling: {
        type: String,
        required: [true, "How are you feeling?"]
      },
      
    })

      module.exports = model('Request', RequestSchema);


     
