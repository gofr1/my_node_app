var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');
var mongo = require('mongodb');

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myquery = { _id: mongo.ObjectID("5ffad3fc8b45012b36c4f360") };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } }; // or you change only one field { $set: { address: "Canyon 123" } };
  // or { address: /^S/ }; many documents with RegExp
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
}); 

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var query = { _id: mongo.ObjectID("5ffad3fc8b45012b36c4f360")  };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

// Rollback
//MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("nodedb");
//  var myquery = { _id: mongo.ObjectID("5ffad3fc8b45012b36c4f360") };
//  var newvalues = { $set: {name: "John Smith", address: "Highway 71" } };
//  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//    if (err) throw err;
//    console.log("1 document updated");
//    db.close();
//  });
//}); 
