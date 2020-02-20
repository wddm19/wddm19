//Import express into file
const express = require("express");

//Import express-handlebars package
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');    

//create express app object
const app = express();

//Setting handlebars as a template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Link static assests
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//Setting up router
app.get("/home", (req,res) => {
    
    res.render("home", {
        title:"Home",
        headingInfo: "Home page",
        dynamicContent: "something"
    });
})

app.get("/program", (req,res) => {
    
    res.render("program", {
        title:"Program",
        headingInfo: "Media Program Page",
        listings: listings
    });
})

app.get("/student", (req,res) => {
    
    res.render("student", {
        title:"Student",
        headingInfo: "Student Page",
        dynamicContent: "something"
    });
})

//Create a Web server
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Web server is connected.`);
})