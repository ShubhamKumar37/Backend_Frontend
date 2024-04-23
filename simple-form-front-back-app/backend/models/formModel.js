const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type:String,
        match: /^\S+@\S+\.\S+$/
    },
    Age:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Form", formSchema, "formData");