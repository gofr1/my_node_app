// Install tedious module in your project. 
// Tedious is the implementation of the TDS protocol, which is used to communicate to SQL Server.
//* npm install tedious

var Connection = require('tedious').Connection;
var config = require('./.env/config');
var connection = new Connection(config);  

connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

