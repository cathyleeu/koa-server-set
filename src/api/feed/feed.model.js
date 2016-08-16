import mongoose from 'mongoose'

const Feed = new mongoose.Schema({
  username: String,
  useruniv: String,
  userimg: String,
  update: { type: Date, default: Date.now },
  cxt: String,
  // location: { type: String, default: null },
  imageSource: String,
})

export default mongoose.model('feed', Feed)
