// importation of player model from the model folder 
const { player } = require("../models/player");

// importation of operators symbol 
const { Op } = require("sequelize");

// crud operations handlers start from here 

// posting of player data
module.exports.sendPlayerData = async (req, res) => {

    try {
        
        // destruting of player fields
        const { firstName, lastName, age, password, height, position } = req.body;

        // the create() method Builds a new model instance and calls save on it.
        // that what is responsible for saving the player data in the database
        const addPlayerData = await player.create({ firstName, lastName, age, password, height, position })

        // returns the just added data
        res.status(201).json(addPlayerData)

    } catch (error) {
        
        console.log("something went wrong with posting of player data : ", error);

    }

};

// fetching all players info
module.exports.fetchingOfAllPlayersInfo = async (req, res) => {

    try {
        
        const fetchAallPlayersInfo = await player.findAll();

        res.status(201).json(fetchAallPlayersInfo)

    } catch (error) {
       
        console.log("unable to fetch all players info : ", error)

    }

};

// updating of player info 
module.exports.playerInfoUpdate = async (req, res) => {

    try {
        
        // destruting of playerId
        const { playerId } = req.params;
        
        // destruting of player fields
        const { firstName, lastName, age, height, position } = req.body;

        // Update multiple instances that match the where options.The promise returns an array with one or two elements.The first element is always the number of affected rows, while 
        // the second element is the actual affected rows(only supported in postgres and mssql with options.returning true.)
        const updatePlayerInfo = await player.update({ firstName, lastName, age, height, position }, {

            // Options to describe the scope of the search.
            where: {

                id: playerId

            }

        })

        res.status(200).json(updatePlayerInfo)

    } catch (error) {
        
        console.log("something went wrong with updating of player informations : ", error)

    }

};

// deleting of player info using their id 
module.exports.playerInfoDeleted = async (req, res) => {

    try {
        
        const { playerId } = req.params;

        // delete player whose id = to playerId 
        const deletePlayerInfo = await player.destroy({
            
            where: {
                
                // the id here is for the column field in database which is the id set within the player model 
                id: {

                    // eq here means equal 
                    [Op.eq]: playerId

                }

            }

        })

        // this return the number of rows deleted
        res.status(204).json(deletePlayerInfo)

    } catch (error) {
        
        console.log("unable to delete player info : ", error)

    }

};

// fetching a single player information using their primary key 
module.exports.getSingleInfoByPk = async (req, res) => {

    try {
        
        const { id } = req.params;

        // Search for a single instance by its primary key. 
        // This applies LIMIT 1, so the listener will always be called with a single instance.
        const findByTheirPk = await player.findByPk(id)

        res.status(201).json(findByTheirPk)

    } catch (error) {
        
        console.log(error.message)

    }
}

// crud operations ends here 