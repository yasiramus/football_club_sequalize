//imporation of the datatypes from sequalize orm 
const { DataTypes } = require("sequelize");

//importation of the connection instance from the connection folder
const { connection } = require("../connection/connection");

// importation of bcrypt for hashing of password
const bcrypt = require("bcrypt");

//Defining a new model for the player, which represent a table in the database.
module.exports.player = connection.define("Player",

    // Model attributes are defined here
    // the attribute is An object, where each attribute is a column of the table.
    {

        id: {

            type: DataTypes.INTEGER,

            primaryKey:true,
            
            autoIncrement:true
            
        },

        // that is the first name is a column 
        firstName: {
            
            type: DataTypes.STRING,
            
            allowNull: false,

            // with the get method it value isnt save in the database the get act like fetch the data get manipulated when 
            // fetching the data  
            get() {
                
                // getting the value
                // we use the getDataValue method to get the value of the column
                const firstNameToLowerCase = this.getDataValue("firstName");

                // Converts firtname to uppercase.
                return firstNameToLowerCase ? firstNameToLowerCase.toUpperCase() : null;

            }

        },

        lastName: {
            
            type: DataTypes.STRING,
            
            allowNull: false

        },

        age: {
            
            type: DataTypes.INTEGER,
            
            allowNull: false,

            set(value){

               const numberToString = value.toString();

               this.setDataValue("age", numberToString)
            }

        },

        password: {

            type:DataTypes.STRING,

            allowNull:false,

            set(hashedValue){

                const hashPassword = bcrypt.hashSync(hashedValue, 12);

                this.setDataValue("password", hashPassword)

            }

        },

        height: {
            
            type: DataTypes.STRING,
            
            allowNull: false

        },

        position: {
            
            type: DataTypes.ENUM,
            
            values: ["defender", "milddefender", "striker"]

        }
    }, 

    {
        // disabling the createdAt timestamp
        createdAt: false,
        
        // I want updatedAt to actually be called updatePlayerTimestamp
        updatedAt: 'updatePlayerTimestamp'
        
    }

);
