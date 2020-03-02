//Import express into file
const express = require("express");

//Import express-handlebars package
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');    

// Import DB
const programModel = require("./models/programs");
const infoModel = require("./models/home");

//create express app object
const app = express();

//Setting handlebars as a template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Link static assests
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// HTML
const htmlTemplate = section => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> ${section.title} </title>
  <link rel="stylesheet" href="css/index.css">
</head>

<body>
    ${section.html}
</body>
</html>
`

//Setting up router
app.get("/", (req,res) => {
    
    res.render("home", {
        title:"Home",
        headingInfo: "Home page",
        dynamicContent: "something",
        info: infoModel.getallInfo()

    });
})

app.get("/program", (req,res) => {
    
    res.render("program", {
        title:"Program",
        headingInfo: "Media Program Page",
        dynamicContent: "something",
        programs: programModel.getallPrograms()
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