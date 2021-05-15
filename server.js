// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Require Express to run server and routes

// Import a function under the name express, cors and body parse which are all of the Node packages we have installed
const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express(); //creating the app variable that will use the information from the express method and will work as instructions
const port = 3000; // we always need a port name. This name is how we will be able to keep calling back
app.listen(port, function() { //here we listen out for the port name and display friendly message to use letting them know if our code is working
  console.log(`Server running on port ${port}`) //message that will pop up if code work and we use a short cut to pull port inforamtion
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/Documents', function (req, res){// here 
  res.send(projectData)
});

const temp = 
const date = 
const userResponse = 

// const data = []
// app.post('/myUrl', addMovie )

// function addMovie (req, res){
//   console.log(req.body)
//   data.push(req.body)
// }




/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
// app.use(express.static('website'));


// Setup Server


/*
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

console log(hello);*/