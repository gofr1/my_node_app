// npm install mongodb
// var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

// This code will create new database nodedb and insert 14 values
// or if db exists irt will add 14 records to customers collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myobj = [
    { name: 'John Smith', address: 'Highway 71'},
    { name: 'Peter Parker', address: 'Lowstreet 4'},
    { name: 'Amy Adams', address: 'Apple st 652'},
    { name: 'Hannah Montana', address: 'Mountain 21'},
    { name: 'Michael Jackson', address: 'Valley 345'},
    { name: 'Sandy Sommers', address: 'Ocean blvd 2'},
    { name: 'Betty Wild', address: 'Green Grass 1'},
    { name: 'Richard Owen', address: 'Sky st 331'},
    { name: 'Susan Olsen', address: 'One way 98'},
    { name: 'Vicky Will', address: 'Yellow Garden 2'},
    { name: 'Ben Parker', address: 'Park Lane 38'},
    { name: 'William Cadence', address: 'Central st 954'},
    { name: 'Chuck Norris', address: 'Main Road 989'},
    { name: 'Viola Haidyn', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 