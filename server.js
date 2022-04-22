//jshint esversion:6

const express = require("express");

const app = express();


//this is used when you want to make a request or if the user wants a response  from the server

app.get("/", function(request, response){
    response.send("<h1>aloha, Shalom Welcome to my World!!!!</h1>");
});

// this is used when requesting infor from a server

app.listen(3000, function() {
    console.log(`Example app listening on port ${3000}`);
});
