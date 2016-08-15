import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const schema = mongoose.Schema({
  username: String,
  useruniv: String,
  userimg: String,
  update: { type: Date, default: Date.now },
  time: String,
  cxt: String,
  location: { type: String, default: null },
  img: String,
}, {collection:'post'})

schema.plugin(autoIncrement.plugin, {
  model: "post",
  field: "no",
  startAt: 1,
  incrementBy: 1
});

module.exports = mongoose.model('post', schema);
