const express = require('express');
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))



app.get('/events', (req, res) => {
  var query = { investigationId: 0 };
  db.collection("events").find(query).toArray(function(err, result) {
    	if (err) throw err;
      	res.send(result);    
  });
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

var db

MongoClient.connect('mongodb://localhost:27017/icatplus', (err, client) => {
  if (err) 
	return console.log(err)

  db = client.db('icatplus') 
  app.listen(8000, () => {
    console.log('Mongo is up and running')
  })
})


