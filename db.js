// Install tedious module in your project. 
// Tedious is the implementation of the TDS protocol, which is used to communicate to SQL Server.
//* npm install tedious

var Connection = require('tedious').Connection;
var config = require('./.env/config');
var connection = new Connection(config);  

// Attempt to connect and execute queries if connection goes through
connection.connect( err => {
    if (err) {
        console.error(err.message);
    } else {
        queryDatabase();
    }
});

var Request = require('tedious').Request;  
//var TYPES = require('tedious').TYPES;  

function queryDatabase() {
    console.log("Reading rows from the Table...");
  
    // Read all rows from table
    const request = new Request(
        `SELECT DB_NAME() [db], 
                CURRENT_TIMESTAMP [current_time], 
                @@VERSION [sql_version];`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );
  
    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
  
    connection.execSql(request);
}