//jshint esversion:6

const express = require("express");

const app = express();


//this is used when you want to make a request or if the user wants a response  from the server

//this is a request to the home route
app.get("/", function(request, response){
    response.send("<h1>aloha, Shalom Welcome to my World!!!!</h1>");
});

//this is a request to the contact route
app.get("/contact", function(req, res){
    res.send("hit me up  on twitter@jadakoseD")
});

//this is a request to the my bio route

app.get("/about", function(req, res) {
    res.send("I am a black 5'11 male. I like sports and just minding my business.")
});

//this is a request to the my hobbies route
app.get("/hobbies", function(req,res){
    res.send("code, podcasts, books, soccer, rugby, beer, pork");
});

// this is used when requesting infor from a server

app.listen(3000, function() {
    console.log(`Example app listening on port ${3000}`);
}); 
