const mongoose = require("mongoose");

function dbConnection()
{
    mongoose.connect("mongodb://localhost:27017/electionCandidatedB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Database is connected successfully")).catch((Error) => console.log("Error in connection string"));
}

module.exports = dbConnection;