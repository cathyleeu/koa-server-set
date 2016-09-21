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
