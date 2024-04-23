const mongoose = require("mongoose");

const defaultSchema = new mongoose.Schema({
    State:{
        type:String
    },
    Constituencies:{
        type:Array,
    }
});

module.exports = mongoose.model("defaultSchema", defaultSchema, "defaultData");