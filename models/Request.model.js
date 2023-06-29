const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const empathyRequestSchema = new Schema ({
    // date time channel language Im feeling...
    feeling: String,
    date: {
        type: String,
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
      },})

      module.exports = model('Request', empathyRequestSchema);
