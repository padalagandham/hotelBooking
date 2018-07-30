var express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://testuser:test1234@ds161391.mlab.com:61391/hotelbooking',{
  autoIndex: false,
  useNewUrlParser: true,
});


var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
