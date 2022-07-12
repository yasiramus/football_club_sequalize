// imporation of the Sequalize orm 
const { Sequelize } = require("sequelize");

// Connecting to the database
// creation of Sequelize instance using the third
// Option 3:  that is Passing parameters separately (other dialects)
module.exports.connection = new Sequelize(
    
    // Instantiate sequelize with name of the database, username and password
    process.env.databaseName, process.env.username, process.env.password,
    
    // the fourth parameter it takes is the option which is an object
    {

        //the host is the name of host or host number 
        host:'127.0.0.1',

        // the dialect signify the type of database you are using 
        dialect:"mysql" 
    
    }

);