'use strict';

import mount from 'koa-mount'; //첫번째 인자로 주소가 들어왕
import { root } from '../api';


export default function configRoutes(app) {
  app.use(mount('/', root.routes()));
  // '/'로 주소가 들어오면 root.routes의 결과로 연결해줘~ 함수니깡
  // List Endpoints Here
}
