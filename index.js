/*jshint esversion: 6 */

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());
app.listen(3000, () => console.log("All good, captain"));

var messages = [];

app.get('/messages', function(req, res, next){
  res.status(200).json({messages});
});

app.post('/messages', function(req, res, next){
  console.log(req.body);
  messages.push({ username: req.body.username, message: req.body.message, time: new Date() });
  console.log(messages);
  res.status(200).json({messages});
});
