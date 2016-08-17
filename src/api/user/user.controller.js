'use strict';

import User from './user.model';


export async function createUser(ctx) {
  const user = new User(ctx.request.body.user)
  try {
    await user.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }

  const response = user.toJSON()

  ctx.body = {
    response
  }
}

export async function getUsers(ctx) {
  const users = await User.find()
  ctx.body = { users }
}

export async function getUser(ctx, next) {
  try {
    const user = await User.findById(ctx.params.id, '-password')
    if (!user) {
      ctx.throw(404)
    }

    ctx.body = {
      user
    }
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      ctx.throw(404)
    }

    ctx.throw(500)
  }

  if(next) return next()
}



// export async function index(ctx, next) {
//   let data = await list()
//   ctx.status = 200;
//   ctx.body = data;
//   await next();
// }