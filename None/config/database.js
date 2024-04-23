const mongoose = require("mongoose");
require("dotenv").config();

const dbConnectionFunction = async () =>
{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log("Database not connected");
        console.log(err);
    });
}

module.exports = dbConnectionFunction;