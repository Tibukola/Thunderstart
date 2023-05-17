const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const helmet = require("helmet");
const cors = require("cors");
const app = express();
const flash = require("express-flash");
const session = require("express-session");

app.use(
  cors({
    origin:"*",
    allowedHeaders:["auth-token", "Access-Control-Allow-Origin"],
  })
  );
 app.use(express.static("public"));
app.use(helmet());
app.set("view engine", "ejs");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
  secret:"lalala",
  resave:false,
  saveUninitialized:true,
  cookie:{ maxAge:600000},
})
);
app.use(flash());
app.use("/api/v1/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);

app.use((req, res) =>{
  return res.status(404).json({message:"route not found"});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
 return  res.status(err.status || 500).json({message: "something went wrong", error:err.message});
});

module.exports = app;
