const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Succesful db connection");
  client.close();
});

//routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


//when someone goes to these urls, it will load the routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//starts the server
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});