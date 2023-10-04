const database = require("../../database")


// Read

const getAllColors = (req, res) => {
    database
        .query("SELECT * FROM colors")
        .then(([colors]) => res.json(colors))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const getAllUser = (req, res) => {
    database
        .query("SELECT * FROM users")
        .then(([users]) => res.json(users))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const getAUser = (req, res) => {
    const user_id = Number(req.params.userId);


    database
        .query(`SELECT * FROM users WHERE user_id = ${user_id}`)
        .then(([user]) => res.json(user))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}


// Post

const createAUser = (req, res) => {
    const { user_email, user_description, user_filiere, user_hashedPassword, user_name, user_sharedLink1, user_sharedLink2, user_sharedLink3 } = req.body;

    const query = `
        INSERT INTO users (
            user_email, 
            user_description, 
            user_filiere, 
            user_hashedPassword, 
            user_name, 
            user_sharedLink1, 
            user_sharedLink2, 
            user_sharedLink3
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    database
        .query(query, [user_email, user_description, user_filiere, user_hashedPassword, user_name, user_sharedLink1, user_sharedLink2, user_sharedLink3])
        .then(([result]) => {
            res.status(201).json({ message: 'Utilisateur créé', userId: result.insertId });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur lors de la création de l'utilisateur dans la base de données");
        });
};




module.exports = {
    getAllUser,
    getAUser,
    createAUser
}