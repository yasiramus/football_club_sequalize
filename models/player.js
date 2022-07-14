//imporation of the datatypes from sequalize orm 
const { DataTypes } = require("sequelize");

//importation of the connection instance from the connection folder
const { connection } = require("../connection/connection");

//Defining a new model for the player, which represent a table in the database.
module.exports.player = connection.define("Player",

    // Model attributes are defined here
    // the attribute is An object, where each attribute is a column of the table.
    {

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,
            
            autoIncrement: true
            
        },

        // that is the first name is a column 
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
    }

);
