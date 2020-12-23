// Use the npm init command to create a package.json file for your application.
// run this in terminal in app folder
//* npm init
//* npm install express

// To use the Express library you call the require() function in your index.js file to include it in your application. 
const express = require('express')
const app = express();
const port = 8001;

// The app.get() function only responds to HTTP GET requests with the specified URL path ('/'),
// in this case by calling a function to send our Hello World! message.
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//  to create a server (app) that listens for HTTP requests on specified port and prints a message to the console 
// explaining what browser URL you can use to test the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

// terminal
//* node index.js