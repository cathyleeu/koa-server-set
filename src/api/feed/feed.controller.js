import Feed from './feed.model'

export async function createFeed(ctx, next) {
  const feed = new Feed(ctx.request.body)
  console.log(ctx.request.body)
  console.log(typeof ctx.request.body)
  try {
    await feed.save();
  } catch (err) {
    ctx.throw(422, err.message)
  }
}

export async function getFeeds(ctx) {
  const feed = await Feed.find().sort({posted: -1})
  ctx.body = { feed }
}

export async function incLike(ctx) {
  const feed = new Feed(ctx.request.body);
  await Feed.update({_id: feed._id}, { $inc: { likes: 1 }});
  console.log("증가증가");
}

export async function decLike(ctx) {
  const feed = new Feed(ctx.request.body);
  const data = await Feed.findOne({_id: feed._id});
  const decCount = data.likes - 1;
  await Feed.update({_id: feed._id}, {likes: decCount});
  console.log("감소감소");
}

// export async function updateFeed(ctx) {
//   const feed = ctx.body
//
//   Object.assign(feed, ctx.request.body)
//
//   await feed.save()
//
//   ctx.body = {
//     feed
//   }
// }

export async function deleteFeed(ctx) {
  const feed = ctx.body

  await feed.remove()

  ctx.status = 200
  ctx.body = {
    success: true
  }
}
