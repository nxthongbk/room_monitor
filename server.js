const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
require('dotenv').config()

var path = require("path");
app.use(express.static("public"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "public"))); // serve static resource

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});


let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port, () => console.log('App listening at http://localhost:${port}'))

