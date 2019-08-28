const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const path = require('path');

const PORT = 8080;

// function handleRequest(request,response){
//     fs.readFile(__dirname + "/site/index.html", function(err,data){
//         response.writeHead(200, {"Content-Type": "text/html"});
//         response.end(data);
//     })
// }

app.use(express.static(path.join(__dirname, 'site')));


// let server = http.createServer(handleRequest);

app.listen(PORT, function(){
    console.log("Server listening on port: " + PORT );
});
