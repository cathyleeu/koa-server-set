import mongoose from 'mongoose'
// import autoIncrement from'mongoose-auto-increment'

const Feed = new mongoose.Schema({
  username: String,
  useruniv: String,
  userimg: { type: String, default: 'Avatar' },
  posted: { type: Date, default: Date.now },
  content: { type: String, required: true },
  // location: { type: String, default: null },
  imageSource: { type: String, default: 'null' },
}, {collection: 'feed'})



export default mongoose.model('feed', Feed)
