// MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.

var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

//// Create an order table which stores products for each order
//MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("nodedb");
//  var myobj = [
//    { _id: 1, product_id: 16, status: 1 }
//  ];
//  dbo.collection("orders").insertMany(myobj, function(err, res) {
//    if (err) throw err;
//    console.log("Number of documents inserted: " + res.insertedCount);
//    db.close();
//  });
//});

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});

//* [{"_id":1,"product_id":16,"status":1,"orderdetails":[{"_id":16,"name":"Apple"}]}]