/*
the backend for out simple application using nodejs and ejs as the templating enging.
under the hood I am using the Reactjs to render component into the view. quite convinient given the 
capability of reactjs for this functionality (portability).
check the main component (index.js) for the implementation.

To execute this simple application:

open two command prompt or terminal ,
1. run the command: webpack
2 run the command: npm start which implicitly run node in watch mode.

cloning the project from github, you have to:

run install after downloading the project to lock the project dependency at the time of creating this project.




*/

require('babel-register')({ presets: ['react'] });
var express = require('express');
var request = require('request');
var app = express()

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var path    = require("path");

// needed to work with the ejs files
// npm install ejs --save must be run before using this.
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'dist')))

// route handling at / mount path
app.get('/', function(req,res){

  res.render('index');

});

// grab the city name from the path.
app.get('/city/:city', function(req,res){

	let city = req.params.city;
	// using the openweathermap API to fetch weather info.
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9e392c31bb79dfb786737374a4f16ea`;

	request(url, function (error, response, body) {
	let result = JSON.parse(body);
	res.send(result);

  });


});

// handling route at port 3000
//like this: localhost:3000/ 
const PORT = 3000;
app.listen(PORT, function(){
   console.log("You are now connected to the server at port: " + PORT);
});