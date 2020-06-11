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

// var server = require("http").Server(app);
// var io = require("socket.io")(server);


app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))



// var server = http.createServer(app);
// var io = require('socket.io').listen(server);  //pass a http.Server instance
// server.listen(8080);  //listen on port 80




//var io = require("socket.io")(server);
//server.listen(3000);

// server = require('http').createServer(app),
// io = require('socket.io').listen(server),

// server.listen(443);
// app.listen(443);
// console.log('RESTful API server started on: 443' )
