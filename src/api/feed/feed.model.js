import mongoose from 'mongoose'
// import autoIncrement from'mongoose-auto-increment'

const Feed = new mongoose.Schema({
  username: String,
  useruniv: String,
  userimg: { type: String, default: 'null' },
  // update: { type: Date, default: Date.now },
  content: { type: String, required: true },
  // location: { type: String, default: null },
  imageSource: { type: String, default: 'null' },
}, {collection: 'feed'})

// Feed.plugin(autoIncrement.plugin, {
//   model: "feed",
//   field: "no",
//   startAt: 1,
//   incrementBy: 1
// });



Feed.pre('save', function preSave(next) {
  const feed = this

  new Promise((resolve, reject) => {
    resolve(feed)
  })
  .catch(err => next(err))
})


export default mongoose.model('feed', Feed)

// export function feed() {
//   return new Promise((resolve) => {
//     setTimeout(() => {//
//       resolve([]);
//     });
//   });
// }
