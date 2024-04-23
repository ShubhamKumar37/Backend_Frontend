const {Router} = require("express");
const route = Router();
const {createEntry, getData} = require("../controllers/formController");

route.post("/newcreate", createEntry);
route.get("/getdata", getData);

module.exports = route;