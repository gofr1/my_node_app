var fs = require('fs');

fs.unlink('new1.txt', function (err) {
  if (err) throw err;
  console.log('new1.txt file deleted!');
}); 