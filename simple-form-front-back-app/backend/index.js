const express = require("express");
const cors = require("cors");
const app = express();
const Route = require("./routes/formRoute");
const dbConnect = require("./config/database");
require("dotenv").config();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use("/api/v1/", Route);

app.listen(process.env.PORT, () => {
    console.log(`Server is started at port number ${process.env.PORT}`);
});

dbConnect();
