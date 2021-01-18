var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  dbo.collection("testdrop").drop(function(err, delOK) { // dbo.dropCollection("testdrop", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
}); 