require('dotenv').config();
const mongoose = require('mongoose');

// connect to database
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false})
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

const express = require('express');

const routes = require('../routes');
const path = require('path');

const app = express();

const port = process.env.PORT;

app.use((req, res, next) => {
  console.log(`headers`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/', routes);

app.use((err, req, res, next) => {
  console.log(`logging error`);
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

