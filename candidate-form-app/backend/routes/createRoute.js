const {Router} = require("express");
const route = Router();
const {createDefault} = require("../controllers/defaultController");
const {getDistricts} = require("../controllers/getController");

console.log("Route ok");
route.post("/create", createDefault);
route.get("/getstate/:state", getDistricts);

module.exports = route;