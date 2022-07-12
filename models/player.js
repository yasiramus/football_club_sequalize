// imporation of the datatypes from sequalize orm 
const { DataTypes } = require("sequelize");

//importation of the connection instance 
const { connection } = require("../connection/connection");

// defining a model for the player 
module.exports.player = connection.define("Player",

    // Model attributes are defined here
    {

        firstName: {
            
            type: DataTypes.STRING,
            
            allowNull: false

        },

        lastName: {
            
            type: DataTypes.STRING,
            
            allowNull: false

        },

        age: {
            
            type: DataTypes.INTEGER,
            
            allowNull: false

        },

        height: {
            
            type: DataTypes.STRING,
            
            allowNull: false

        },

        position: {
            
            type: DataTypes.ENUM,
            
            values: ["defender", "midffilder", "striker"]

        }
    },

    // model options
    {

        connection,

        // modelName: "Player"
        
    }

);
