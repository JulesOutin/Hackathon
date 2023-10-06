const database = require("../../database")


// Read

const getAllJoboffer = (req, res) => {

    database
        .query("SELECT * FROM joboffers")
        .then(([joboffers]) => res.json(joboffers))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const getAJoboffer = (req, res) => {
    const joboffer_Id = Number(req.params.jobofferId);
  

    database
        .query(`SELECT * FROM joboffers WHERE joboffer_id = ${joboffer_Id}`)
        .then(([joboffer]) => res.json(joboffer))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const createAJoboffer = (req, res) => {

    const {
        jobofferTitle,
        jobofferDescription,
        jobofferPrice,
        jobofferIsWorker,
        jobofferLocalisation,
        jobofferDuration,
        jobofferImage, 
        userEmail, 
        userFiliere, 
        userName, 
        userPhone, 
        userDiscord 
    } = req.body;

    const query = `
        INSERT INTO joboffers (
            joboffer_title, 
            joboffer_description, 
            joboffer_price, 
            joboffer_isWorker, 
            joboffer_localisation, 
            joboffer_duration,
            joboffer_image, 
            user_email,
            user_filiere,
            user_name,
            user_phone,
            user_discord
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    database
        .query(query,
            [
                jobofferTitle,
                jobofferDescription,
                jobofferPrice,
                jobofferIsWorker,
                jobofferLocalisation,
                jobofferDuration,
                jobofferImage,
                userEmail,
                userFiliere,
                userName,
                userPhone,
                userDiscord
            ])
        .then(() => res.status(201).json({ message: "Job offer created" }))
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error creating a new job offer");
        });
};


/* ------------------------------------------------------------------------
Suite du Controller joboffer non utilisé (Pour prochain sprint : crud annonces)
------------------------------------------------------------------------- */


// const getAllJobofferFromUser = (req, res) => {
//     const { user_Id } = Number(req.params.userId);

//     database
//         .query(`SELECT * FROM joboffers WHERE id_user = ${user_Id}`)
//         .then(([joboffer]) => res.json(joboffer))
//         .catch((err) => res.status(500).send("Error getting data from database", err))
// }



// Update

// const changeAJoboffer = (req, res) => {
//     const { joboffer_Id } = Number(req.params.jobofferId);
  
//     const { 
//         joboffer_title, 
//         joboffer_description, 
//         joboffer_price, 
//         joboffer_isWorker, 
//         joboffer_localisation, 
//         joboffer_duration 
//     } = req.body;

//     database
//         .query(`UPDATE joboffers SET joboffer_title = ?, joboffer_description = ?, joboffer_price = ?, joboffer_isWorker = ?, joboffer_localisation = ?, joboffer_duration = ? WHERE joboffer_id = ${joboffer_Id}`, 
//         [
//             joboffer_title, 
//             joboffer_description, 
//             joboffer_price, 
//             joboffer_isWorker, 
//             joboffer_localisation, 
//             joboffer_duration,
//         ])
//         .then(() => res.send("Joboffer updated"))
//         .catch((err) => res.status(500).send("Error updating joboffer", err))
// }


// // Delete

// const deleteAJoboffer = (req, res) => {
//     const joboffer_id = Number(req.params.jobofferId);

//     database
//         .query('DELETE FROM joboffers WHERE joboffer_id = ?', [joboffer_id])
//         .then(() => res.send("Joboffer deleted"))
//         .catch((err) => res.status(500).send("Error deleting Joboffer", err))
// }



module.exports = {
    getAllJoboffer,
    getAJoboffer,
    createAJoboffer,
}