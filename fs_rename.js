var fs = require('fs');

fs.rename('oldfilename.txt', 'newfilename.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 