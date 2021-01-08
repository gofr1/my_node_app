var fs = require('fs');
var os = require("os");

// will create a new0.txt file with "Some content" in it
// if file already exists it will add "Some content" to the end of file (append)

fs.appendFile('new0.txt', 'Some content' + '\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", 
// the specified file is opened for writing. If the file does not exist, an empty file is created

fs.open('new1.txt', 'w', function (err, file) {
  fs.write (file, 'Some content' + os.EOL, null, 'utf-8', function()  { // os.EOL instead of /n
    if (err) throw err;
    console.log('Saved!');
  });
}); 
