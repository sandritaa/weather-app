// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Import a function under the name express, cors and body parse which are all of the Node packages we have installed
const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express(); 

// Use bodyParser as middleware for our app, specifically:
// - urlencoded: returns middleware that only parses urlencoded bodies and only looks at requrests where the Content-Type heared matches the type option
// - json: returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors as middleware for our app
app.use(cors());

// Allow serving for static files (e.g. images, CSS files, javascript files)
app.use(express.static('website'));

// Define port for connection and establish
const port = 3000; 
app.listen(port, function() { 
  console.log(`Server running on port ${port}`)
});

// Respond with projectData when a GET request is made from the client side
app.get('/getRoute', function (req, res){
  res.send(projectData)
});

// Prepared server to receive data
app.post('/postRoute', function (req, res) {
  projectData.date = req.body.date
  projectData.temp = req.body.temp
  projectData.mood = req.body.mood
  console.log('NEW ENTRY')
  console.log('Latest date entry in server: ' + projectData.date)
  console.log('Latest temperature entry in server: ' + projectData.temp)
  console.log('Latest mood entry in server: ' + projectData.mood)
  res.end()
});
