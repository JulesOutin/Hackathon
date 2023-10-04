const database = require("../../database")


// Read

const getAllJoboffer = (req, res) => {

    database
        .query("SELECT * FROM joboffers")
        .then(([joboffers]) => res.json(joboffers))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const getAJoboffer = (req, res) => {
    const { joboffer_Id } = Number(req.params.jobofferId);
    console.log(joboffer_Id);

    database
        .query(`SELECT * FROM joboffers WHERE joboffer_id = ${joboffer_Id}`)
        .then(([joboffer]) => res.json(joboffer))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const getAllJobofferFromUser = (req, res) => {
    const { user_Id } = Number(req.params.userId);

    database
        .query(`SELECT * FROM joboffers WHERE id_user = ${user_Id}`)
        .then(([joboffer]) => res.json(joboffer))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}


// Create 

// const createOnePoster = (req, res) => {
//     const { id_colors } = req.body;

//     database
//         .query('INSERT INTO posters (posters_text, id_colors) VALUES (?, ?)', ['', id_colors])
//         .then(() => res.status(201).send("Poster created"))
//         .catch((err) => res.status(500).send("Error creating a new poster", err))
// }

const createAJoboffer = (req, res) => {
    const {
        jobofferTitle,
        jobofferDescription,
        jobofferPrice,
        jobofferIsWorker,
        jobofferLocalisation,
        jobofferDuration
      } = req.body;

    database
        .query('INSERT INTO joboffers (joboffer_title, joboffer_description, joboffer_price, joboffer_isWorker, joboffer_localisation, joboffer_duration, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [
            jobofferTitle,
            jobofferDescription, 
            jobofferPrice,
            jobofferIsWorker,
            jobofferLocalisation,
            jobofferDuration
        ])
        .then(() => res.status(201).send("Joboffer created"))
        .catch((err) => res.status(500).send("Error creating a new poster", err))
}

// Update

// const updateOnePoster = (req, res) => {
//     const postersId = Number(req.params.postersId);
//     const { posters_text, id_colors } = req.body;

//     database
//         .query('UPDATE posters SET posters_text = ?, id_colors = ? WHERE posters_id = ?', [posters_text, id_colors, postersId])
//         .then(() => res.send("Poster updated"))
//         .catch((err) => res.status(500).send("Error updating poster", err))
// }

const changeAJoboffer = (req, res) => {
    const { joboffer_Id } = Number(req.params.jobofferId);
  
    const { joboffer_title, joboffer_description, joboffer_price, joboffer_isWorker, joboffer_localisation, joboffer_duration } = req.body;

    database
        .query('UPDATE joboffers SET joboffer_title = ?, joboffer_description = ?, joboffer_price = ?, joboffer_isWorker = ?, joboffer_localisation = ?, joboffer_duration = ? WHERE joboffer_id = ?', [joboffer_title, joboffer_description, joboffer_price, joboffer_isWorker, joboffer_localisation, joboffer_duration, joboffer_Id])
        .then(() => res.send("Joboffer updated"))
        .catch((err) => res.status(500).send("Error updating joboffer", err))
}


// Delete

const deleteOnePoster = (req, res) => {
    const postersId = Number(req.params.postersId);

    database
        .query('DELETE FROM posters WHERE posters_id = ?', [postersId])
        .then(() => res.send("Poster deleted"))
        .catch((err) => res.status(500).send("Error deleting poster", err))
}

const deleteAJoboffer = (req, res) => {
    const joboffer_id = Number(req.params.jobofferId);

    database
        .query('DELETE FROM joboffers WHERE joboffer_id = ?', [joboffer_id])
        .then(() => res.send("Joboffer deleted"))
        .catch((err) => res.status(500).send("Error deleting Joboffer", err))
}



module.exports = {
    getAllJoboffer,
    getAJoboffer,
    getAllJobofferFromUser,
    createAJoboffer,
    changeAJoboffer,
    deleteAJoboffer,
}