var MongoClient = require('mongodb').MongoClient;
var url = require('./.env/mongourl');

// If you do not specify an _id field, then MongoDB will add one for you and assign a unique id for each document.
// In the example above no _id field was specified, and as you can see from the result object,
//MongoDB assigned a unique _id for each document.
// If you do specify the _id field, the value must be unique for each document:

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var myobj = [
    { _id: 14, name: 'Chocolate'},
    { _id: 15, name: 'Lemon'},
    { _id: 16, name: 'Apple'}
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
}); 

//* { result: { ok: 1, n: 3 },
//*   ops:
//*    [ { _id: 14, name: 'Chocolate' },
//*      { _id: 15, name: 'Lemon' },
//*      { _id: 16, name: 'Apple' } ],
//*   insertedCount: 3,
//*   insertedIds: { '0': 14, '1': 15, '2': 16 } }//
