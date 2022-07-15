// importation of express package 
const express = require("express");

// importation of player model from the model folder 
const { player } = require("../models/player");

// creation of express router application 
const router = express.Router();

// crud operations start from here 

// posting of player data
router.post("/api/player", async (req, res) => {

    try {
        
        // destruting of player fields
        const { firstName, lastName, age, height, position } = req.body;

        // the create() method Builds a new model instance and calls save on it.
        // that what is responsible for saving the player data in the database
        const addPlayerData = await player.create({ firstName, lastName, age, height, position })

        // returns the just added data
        res.status(201).json(addPlayerData)

    } catch (error) {
        
        console.log("something went wrong with posting of player data : ", error);

    }

});

// fetching all players info
router.get("/api/player", async (req, res) => {

    try {
        
        const fetchAallPlayersInfo = await player.findAll();

        res.status(201).json(fetchAallPlayersInfo)

    } catch (error) {
       
        console.log("unable to fetch all players info : ", error)

    }

});

// updating of player info 
router.put("/api/player/:playerId", async (req, res) => {

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

})

// exporation of router app
module.exports =  { router }