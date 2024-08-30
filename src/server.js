// importing myData.js 
const myData = require("./myData.js");

// importing the underscore library
// go online to npm and find a library
// type npm install [library name]
// make sure to uninstall node_modules as needed
const _ = require('underscore');

const http = require('http');
const port = process.env.PORT || process.env.NODE_PORT || 3000; 

const onRequest = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("It works!");
    response.end();
};

http.createServer(onRequest).listen(port);

// hello world arrow function
//const helloWorld = () => {
//    console.log("Hello world!");
//};

//helloWorld();

//myData.getMessage();

//const myArray = [1, 2, 3, 4, 5];

//const chunked = _.chunk(myArray, 3);

//console.log(myArray);
//console.log(chunked);