var createError = require('http-errors');
var indexRouter = require('./routes/index');
var app = require('./lib/Express');
var mongoose = require('mongoose');
var cors = require('cors');

require('dotenv').config({path: './enviroment.env'});

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

//Set up default mongoose connection
const mongoDB = (process.env.DB_HOST + process.env.DB_NAME) || 'mongodb://127.0.0.1:27017/mydb';
mongoose.connect(mongoDB).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

app.use('/', indexRouter);

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
