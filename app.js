var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { WebCEngine } = require("express-webc");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.engine("webc", WebCEngine);
app.set("view engine", "webc");
app.set("webc:components", "./components");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog/', express.static(path.join(__dirname, 'blog')))

module.exports = app;
