const express = require("express");
const router = express.Router();


const postersController = require("../02.controllers/posters.controller");
const colorsController = require("../02.controllers/colors.controller");



/* ------------------------------------------------------------------------
Routes Joboffers
------------------------------------------------------------------------- */

router.get("/api/joboffers", jobofferController.getAllJoboffer)
router.get("/api/joboffers/:jobofferId", jobofferController.getAJoboffer)
router.get("/api/joboffers/users/:userId", jobofferController.getAllJobofferFromUser)

router.post("/api/joboffers", jobofferController.createAJoboffer)

router.put("/api/joboffers/:joboffersId", jobofferController.changeAJoboffer)

router.delete("/api/joboffers/:joboffersId", jobofferController.celeteAJoboffer)


/* ------------------------------------------------------------------------
Routes Users
------------------------------------------------------------------------- */

router.get("/api/users", userController.getAllUser)
router.get("/api/users/:userId", userController.getAUser)

router.post("/api/user", userController.creatAUser)



module.exports = router