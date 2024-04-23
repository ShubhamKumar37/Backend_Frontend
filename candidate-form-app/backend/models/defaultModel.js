const mongoose = require("mongoose");

const defaultSchema = new mongoose.Schema({
    state: {
        type: String,
    },
    districts:{
        type: Array,
    },
});


module.exports = mongoose.model("Default", defaultSchema);