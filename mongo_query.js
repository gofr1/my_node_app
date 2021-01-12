var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

// Simple query
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

// Search wirg RegExp
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var query = { name: /^B/ }; // field starts with the letter "B"
  dbo.collection("customers").find(query, { projection: { _id: 0, name: 1, address: 1 }}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 