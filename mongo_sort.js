var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var mysort = { name: 1 }; // 1 - asc, -1 desc
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 }}).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 