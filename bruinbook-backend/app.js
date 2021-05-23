const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const passport = require('passport')
const initializePassport = require('./middleware/passport-config')
const flash = require('express-flash')
const session = require('express-session')

initializePassport(passport)
require('dotenv').config();

// connect to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false})
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes);

app.use('*', (req, res, next) => {
  res.status(404).json("Page not found");
});

app.use((err, req, res, next) => {
  console.error(err);
  console.log("after error");
  res.status(500).json("Error");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
});

