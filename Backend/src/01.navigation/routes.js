const express = require("express");
const router = express.Router();


const jobofferController = require("../02.controllers/joboffer.controller");
const userController = require("../02.controllers/user.controller");


/* ------------------------------------------------------------------------
Routes Joboffers
------------------------------------------------------------------------- */

router.get("/api/joboffers", jobofferController.getAllJoboffer) /*ok*/

router.get("/api/joboffers/:jobofferId", jobofferController.getAJoboffer) 
router.get("/api/joboffers/users/:userId", jobofferController.getAllJobofferFromUser)

router.post("/api/joboffers/:userId", jobofferController.createAJoboffer) /*ok*/


router.put("/api/joboffers/:jobofferId", jobofferController.changeAJoboffer)

router.delete("/api/joboffers/:jobofferId", jobofferController.deleteAJoboffer)


/* ------------------------------------------------------------------------
Routes Users
------------------------------------------------------------------------- */

router.get("/api/users", userController.getAllUser) /*ok*/
router.get("/api/users/:userId", userController.getAUser) /*ok*/

router.post("/api/users", userController.createAUser) /*ok*/




module.exports = router