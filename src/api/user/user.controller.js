'use strict';

import User from './user.model';


export async function createUser(ctx, next) {
  const user = new User(ctx.request.body)
  console.log(ctx.request.body)
  console.log(typeof ctx.request.body)
  // try {
    await user.save();
  // } catch (err) {
  //   ctx.throw(422, err.message)
  // }
}

export async function allUsers(ctx) {
  const users = await User.find()
  ctx.body = { users }
}

/* 특정 User 정보 조회 */
export async function getUser(ctx) {
  const userInfo = ctx.request.body;
  console.log(userInfo);
  //const feed = ctx.request.body;
  const user = await User.findOne({uuid: userInfo.uuid});
  ctx.body = user;
}

export async function login(ctx) {
  const userInfo = ctx.request.body;
  console.log(userInfo);
  const user = await User.findOne({
    userEmail: userInfo.userEmail,
    password: userInfo.password
  });
  console.log(user);
  ctx.body = { user };
}

/* 기존의 getUser
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
*/
