const mongoose = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  // name: {
  //   type: String,
  //   required: true
  // },
  password: {
    type: String,
    required: true
  }
}, schemaOptions);

module.exports = mongoose.model('User', userSchema);
