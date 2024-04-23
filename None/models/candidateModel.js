const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    State:{
        type:String,
    },
    Constituency:{
        type:String,
    },
    Party:{
        type:String,
    },
    Status:{
        type:String,
    },
    Candidate:{
        type:String,
    },
    Image:{
        type:String,
    }
});

module.exports = mongoose.model("Candidate", candidateSchema, "Candidate_Data");