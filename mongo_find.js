var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  dbo.collection("customers").find({}).toArray(function(err, result) { // find all
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

// projection field 0 - not showing, 1 - showing
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 