// importation of express package 
const express = require("express");

// importation of controllers crud operations from the controller folder 
const { sendPlayerData, fetchingOfAllPlayersInfo, playerInfoUpdate, playerInfoDeleted, getSingleInfoByPk } = require("../controller/player.controller");

// creation of express router application 
const router = express.Router();

// crud operations routes start from here 

// posting of player data
router.post("/api/player", sendPlayerData );

// fetching all players info
router.get("/api/player", fetchingOfAllPlayersInfo );

// fetching a single player information using their primary key 
router.get("/api/singleplayer/:id", getSingleInfoByPk);

// updating of player info 
router.put("/api/player/:playerId", playerInfoUpdate );

// deleting of player info using their id 
router.delete("/api/player/:playerId",playerInfoDeleted);

// crud operations routes ends here 

// exporation of router app
module.exports =  { router }