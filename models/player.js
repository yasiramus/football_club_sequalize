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
            
            allowNull: false,

            validate: {

                // the notnull validator allow us to customize our own allowNull error message
                notNull: {

                    msg: "please enter your last name"
                    
                }
            }

        },

        fullName: {

            // A virtual value is not stored in the DB.
            type: DataTypes.VIRTUAL,

            get() {

                // concating the first and last name to form a full name using template string
                return `${this.firstName} ${this.lastName}`
                
            },

            set() {

                throw new Error('Do not try to set the `fullName` value!');
                
            }

        },

        age: {
            
            type: DataTypes.INTEGER,
            
            allowNull: false,

            set(value){
                // converting age numbertoa string
            //    const numberToString = value.toString();
                
                // added10 tothe age number 
                const numberToString = value + 10;3

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
