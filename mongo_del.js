var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

// Delete 1 document
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});

// Delete all documents were the address starts with the letter "O":
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
}); 

// rollback
//MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("nodedb");
//  var myobj = [
//    { name: 'Hannah Montana', address: 'Mountain 21'},
//    { name: 'Susan Olsen', address: 'One way 98'},
//    { name: 'Sandy Sommers', address: 'Ocean blvd 2'}
//  ];
//  dbo.collection("customers").insertMany(myobj, function(err, res) {
//    if (err) throw err;
//    console.log("Number of documents inserted: " + res.insertedCount);
//    db.close();
//  });
//}); 