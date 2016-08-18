import Feed from './feed.model'

export async function createFeed(ctx, next) {
  const feed = new Feed(ctx.request.body)
  console.log(ctx.request.body)
  console.log(typeof ctx.request.body)
  try {
    await feed.save();
    ctx.body = "ok";
  } catch (err) {
    ctx.throw(422, err.message)
  }
  // {username:'이유경',useruniv:'명지대학교',userimg:'Avatar',content:'hello world',imageSource:'null'}
  // ctx.body = {
  //   feed
  // }
}

export async function getFeeds(ctx) {
  const feed = await Feed.find()
  ctx.body = { feed }
}

export async function updateFeed(ctx) {
  const feed = ctx.body.feed

  Object.assign(feed, ctx.request.body.feed)

  await feed.save()

  ctx.body = {
    feed
  }
}

export async function deleteFeed(ctx) {
  const feed = ctx.body.feed

  await feed.remove()

  ctx.status = 200
  ctx.body = {
    success: true
  }
}
