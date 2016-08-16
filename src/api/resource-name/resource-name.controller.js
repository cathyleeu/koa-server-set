'use strict';

import config from '../../config';
import { list } from './resource-name.model';

export async function index(ctx, next) {
  let data = await list()
  ctx.status = 200;
  ctx.body = data;
  await next();
}
