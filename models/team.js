//imporation of the datatypes from sequalize orm 
const { DataTypes } = require("sequelize");

//importation of the connection instance from the connection folder
const { connection } = require("../connection/connection");

//Defining a new model for the player, which represent a table in the database.
module.exports.team = connection.define("Team",

    // Model attributes are defined here
    // the attribute is An object, where each attribute is a column of the table.
    {

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,
            
            autoIncrement: true
            
        },
        
        // that is the first name is a column 
        teamName: {
            
            type: DataTypes.STRING,
            
            // setting the allowNull to false means the field should not be left vacant
            allowNull: false

        },

        dateEstablished: {
            
            // A date only column
            type: DataTypes.DATEONLY,
            
            allowNull: false

        },

        nickname: {
            
            type: DataTypes.STRING,
            
            // when allow null isnt set it takes the default value which is true
            //  means the field can be left vacant
            
        },

        numberOfEmployees: {
            
            type: DataTypes.INTEGER,
            
            allowNull: false

        }


    }

);
