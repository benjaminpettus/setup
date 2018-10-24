import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'
/* eslint-disable no-console */

// this is NOT for actual production
// only for hosting the minified prod build for local debugging purposes
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Ben", "lastName":"Pettus", "email":"ben@gmail.com"},
    {"id": 2, "firstName": "Ben", "lastName":"Pettus", "email":"ben@gmail.com"},
    {"id": 3, "firstName": "Ben", "lastName":"Pettus", "email":"ben@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
})
