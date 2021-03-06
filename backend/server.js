const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// set the connection options, which will be applied to all connections
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
    .then(() => console.log("MongoDB database connection established successfully"))
    .catch(err => console.log(err));

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