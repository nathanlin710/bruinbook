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
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false})
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  console.log(`headers`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/posts', postRoutes);
app.use('/accounts', accountRoutes)

app.use((err, req, res, next) => {
  console.log(`logging error`);
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

