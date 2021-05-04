const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('../routes/postRoutes');
const accountRoutes = require('../routes/accountRoutes');
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

// connect to database
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  console.log(`headers`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next) => {
  console.log(`get \'/\'`);
  res.send("Server root");
  next();
});

app.use(bodyParser.json());

app.use('/postRoutes', postRoutes);
app.use('/accountRoutes', accountRoutes)

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

