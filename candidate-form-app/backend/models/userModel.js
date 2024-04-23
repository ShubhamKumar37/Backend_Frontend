const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    state: {
        type: String,
    },
    district:{
        type: String,
    },
    name:{
        type: String,
    },
    party: {
        type: String,
    },
    image: {
        type: String,
    },
});


module.exports = mongoose.model("User", userSchema);