import mongoose from 'mongoose'

const Feed = new mongoose.Schema({
  username: String,
  useruniv: String,
  userimg: String,
  update: { type: Date, default: Date.now },
  time: String,
  cxt: String,
  // location: { type: String, default: null },
  img: String,
})

export default mongoose.model('feed', Feed)
