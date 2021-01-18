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

// find with limit
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  dbo.collection("customers").find().limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

//* [ { _id: 5ffad3fc8b45012b36c4f360,
//*   name: 'John Smith',
//*   address: 'Highway 71' },
//* { _id: 5ffad3fc8b45012b36c4f361,
//*   name: 'Peter Parker',
//*   address: 'Lowstreet 4' },
//* { _id: 5ffad3fc8b45012b36c4f362,
//*   name: 'Amy Adams',
//*   address: 'Apple st 652' } ]