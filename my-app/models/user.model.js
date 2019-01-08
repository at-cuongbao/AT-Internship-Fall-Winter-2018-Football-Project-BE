const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accsessToken: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },

});

const User = module.exports = mongoose.model('User', userSchema);

module.exports = {
  selectAllUser: (callback) => {
    User.find(callback);
  },
  createUser: (body, callback) => {
    const user = new User(body);
    user.save(callback);
  },
  getUser: (id, callback) => {
    User.find({ _id: id }, callback);
  },
  updateUser: (id, body, callback) => {
    User.findByIdAndUpdate(id, body, callback);
  },
  deleteUser: (id, callback) => {
    User.deleteOne({ _id: id }, callback);
  },
  updateAge: (id, age, callback) => {
    User.findByIdAndUpdate(id, { age: age }, callback);
  },
  
}
