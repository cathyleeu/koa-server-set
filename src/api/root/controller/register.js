'use strict';
import Register from '../model/register'


module.export = {
  add: async function user(ctx, next) {
    if('POST' != ctx.method) return await next;
    const register = new Register(ctx.request.body)
    ctx.body = await register.save()
    await next();
  },
  all: async function userlist(ctx, next) {
    if('GET' != ctx.method) return await next;
    const alluser = await Register.find()
    ctx.body = alluser
    await next();
  }
}

/**
async : generator과 비슷하게 쓸수 있어

yield

generator 버전 => 예전에 머글라우 했을때
function* index(ctx, next) {
  let data = yield list();
  ctx.status = 200;
  ctx.body = data;
  yield next();
}


*/
