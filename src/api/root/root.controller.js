'use strict';

import { list } from './root.model';
import login from './model/register'

export async function index(ctx, next) {
  let data = await list(); //리스트 불러온거~~~
  ctx.status = 200;
  ctx.body = data;
  await next();
}

export async function register(ctx, next) {
  let data = await login(); //리스트 불러온거~~~
  ctx.status = 200;
  ctx.body = data;
  await next();
}

// export async function feed(ctx, next) {
//   add: function *(next) {
//     if('POST' != this.method) return await next;
//     const post = new Post(this.request.body)
//     this.body = await post.save()
//   }
//   all: function *(next) {
//     if('GET' != this.method) return await next;
//     const feedlist = await Post.find().sort({update: -1})
//     const result = [];
//   }
//   this.body = result;
// }

// add: function *(next) {
//   if('POST' != this.method) return yield next;
//   var nutritionist = new Nutritionist(this.request.body);
//   this.body = yield nutritionist.save();
// },

/**
async : generator과 비슷하게 쓸수 있어
co랑 generator?랑 연결해서 비동기 처리 쉽게.

co 왜 만들었닝
async , await = es2015부터 사용할 수 있음 항상 쌍이야

예전에 구현이 안되어서 co로 했는데 이제는 괜츈 es6가 되니깡

yield

generator 버전 => 예전에 머글라우 했을때
function* index(ctx, next) {
  let data = yield list();
  ctx.status = 200;
  ctx.body = data;
  yield next();
}


*/
