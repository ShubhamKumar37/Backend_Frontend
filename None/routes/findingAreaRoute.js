const {Router} = require("express")
const route = Router();
const {getAllArea} = require("../controllers/areaFindingcontroller");

route.get("/get/:State", getAllArea);

module.exports = route;