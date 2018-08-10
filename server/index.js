var express = require('express');
const mongoose = require('mongoose');
const FakeDB = require('./fake-db');
const routerRoutes = require('./routes/rental');

mongoose.connect('mongodb://testuser:test1234@ds023442.mlab.com:23442/heroku_p2dbmwjs',{
  autoIndex: false,
  useNewUrlParser: true,
}).then(() => {
  console.log("DB connected");
  const fakeDB = new FakeDB();
  fakeDB.seedDb();
});


var app = express();
 
app.use('/api/v1/rentals', routerRoutes);

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
console.log('App running 3000');
