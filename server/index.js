//importation of the dotenv package
// the override is set to Override any environment variables that have already been set on your machine with values from .env file.
require("dotenv").config({ override: true });

//importation of express framewaork 
const express = require("express");

//importation of the connection instance from the connection folder
const { connection } = require("../connection/connection");
const { player } = require("../models/player");
const { team } = require("../models/team");

// imporation of router from the route folder
const { router } = require("../routes/player.route");

//setting of port number
const Port = process.env.Port || 6000;

//Creation of an express application.  
const app = express();

//testing of connection
const connectionTester = async () => {

    try {
        
        //the .authenticate() function is use to test if the connection is OK:
        connection.authenticate()

        console.log("Connection to the database has been established successfully.")

    } catch (error) {
        
        console.log("Unable to connect to the database:", error)

    }
}

// invoking the connectionTester func here 
connectionTester();

// implemting the iife fuctions 
(
    async () => {

        try {
        
            // Sync all defined models to the DB.
            // the alter:true checks what is the current state of the table in the database (which columns it has, what are their data types, etc), 
            // and then performs the necessary changes in the table to make it match the model.
            await connection.sync({ alter: true })

            console.log("model synchronize successfully");

        } catch (error) {
        
            console.log("unable synchronize to db columns", error);

        }

    }
    
)()

// setting of middlewares 
app.use(express.urlencoded( {extended:true} ));

app.use(express.json());

app.use(router);

//app listening on the port number 
app.listen(Port, () => console.log(`app running on port : ${Port}`) )