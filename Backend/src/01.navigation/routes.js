const express = require("express");
const router = express.Router();


const jobofferController = require("../02.controllers/joboffer.controller");
const userController = require("../02.controllers/user.controller");


/* ------------------------------------------------------------------------
Routes Joboffers
------------------------------------------------------------------------- */

router.get("/api/joboffers", jobofferController.getAllJoboffer)
router.get("/api/joboffers/:jobofferId", jobofferController.getAJoboffer)
router.get("/api/joboffers/users/:userId", jobofferController.getAllJobofferFromUser)

router.post("/api/joboffers", jobofferController.createAJoboffer)

router.put("/api/joboffers/:jobofferId", jobofferController.changeAJoboffer)

router.delete("/api/joboffers/:jobofferId", jobofferController.deleteAJoboffer)


/* ------------------------------------------------------------------------
Routes Users
------------------------------------------------------------------------- */

router.get("/api/users", userController.getAllUser)
router.get("/api/users/:userId", userController.getAUser)

router.post("/api/user", userController.creatAUser)



module.exports = router