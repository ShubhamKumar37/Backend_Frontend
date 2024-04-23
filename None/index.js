const express = require("express");
const app = express();
const dbConnectionFunction = require("./config/database");
const route = require("./routes/findingAreaRoute");
const cors = require("cors");

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use("/api/v1", route);


app.listen(process.env.PORT, () =>
{
    console.log("Server is live on port number 4000");
});

app.get('/', (req, res) =>
{
    res.send("<h1>Hi this is me shubham kumar</h1>");
});

dbConnectionFunction();