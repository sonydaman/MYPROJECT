var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var constant2 = require("./routes/must/constants");
global.constant = new constant2();
global.response = require(constant.responseRoutes);
var gameApi = require(constant.gameApiRoutes);
var fileUploader = require(constant.fileUsageRoutes);
var routes = require(constant.LandingPage);
var users = require(constant.userPage);
var gamePage = require(constant.gamelistRoutes);

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/uploads', express.static(__dirname + '/uploads'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    req.db = monk(constant.mongodb);
    next();
});


app.use('/', routes);
app.use(constant.userApp, users);
app.use(constant.userApp, users);
app.use(constant.fileApp, fileUploader);
app.use(constant.gamesApp, gamePage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
