const express = require("express");
const app = express();
const dbConnection = require("./config/database");
const route = require("./routes/createRoute");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
dbConnection();
console.log("Index ok");

// CORS middleware
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Allow preflight requests
app.options('*', cors());

app.listen(4000, () => {
    console.log("Server is live on port number 4000");
});
app.use("/api/v1", route);

app.get("/", (req, res) => {
    res.send("Hello World");
});
