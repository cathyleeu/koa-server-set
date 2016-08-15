import mongoose from 'mongoose'
// import autoIncrement from 'mongoose-auto-increment'

const schema = mongoose.Schema({
  username: String,
  useruniv: String,
  useremail: String,
  password: String,
  password_confirmation: String,

}, {collection:'register'})

// schema.plugin(autoIncrement.plugin, {
//   model: "register",
//   field: "no",
//   startAt: 1,
//   incrementBy: 1
// });

module.exports = mongoose.model('register', schema);
