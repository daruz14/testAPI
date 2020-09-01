var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var process = require('process');
var mysql = require('mysql');

var productsRouter = require('./routes/products');
var stadisticsRouter = require('./routes/stadistics');
var env = process.env;

var cors = require('cors');
var app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Database connections
app.use(function(req, res, next){
  res.locals.connection = mysql.createConnection({
		host     : env.DB_HOST,
		user     : env.DB_USER,
		password : env.DB_PASS,
		database : env.DB_NAME
	});
	res.locals.connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
	next();
})

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/stadistics', stadisticsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
