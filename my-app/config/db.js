var mongoose = require('mongoose');
require('dotenv').config({path: './enviroment.env'});

//Set up default mongoose connection
const mongoDB = (process.env.DB_HOST + process.env.DB_NAME) || 'mongodb://127.0.0.1:27017/mydb';
mongoose.connect(mongoDB).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});
