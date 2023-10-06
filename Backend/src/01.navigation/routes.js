const express = require("express");
const router = express.Router();


const jobofferController = require("../02.controllers/joboffer.controller");


/* ------------------------------------------------------------------------
Routes Joboffers
------------------------------------------------------------------------- */

router.get("/api/joboffers", jobofferController.getAllJoboffer) /*ok*/
router.get("/api/joboffers/:jobofferId", jobofferController.getAJoboffer) /*ok*/

router.post("/api/joboffers", jobofferController.createAJoboffer) 


/* ------------------------------------------------------------------------
Routes Joboffers (non utilisé : pour prochain sprint : crud annonces)
------------------------------------------------------------------------- */

// router.get("/api/joboffers/users/:userId", jobofferController.getAllJobofferFromUser)
// router.put("/api/joboffers/:jobofferId", jobofferController.changeAJoboffer)
// router.delete("/api/joboffers/:jobofferId", jobofferController.deleteAJoboffer)


/* ------------------------------------------------------------------------
Routes Users (Pour prochain sprint : crud user)
------------------------------------------------------------------------- */

// router.get("/api/users", userController.getAllUser) /*ok*/
// router.get("/api/users/:userId", userController.getAUser) /*ok*/

// router.post("/api/users", userController.createAUser) /*ok*/




module.exports = router