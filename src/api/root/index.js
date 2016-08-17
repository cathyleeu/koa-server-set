'use strict';

import { index, post } from './root.controller';
import router from 'koa-router';

const root = router();

root.get('/', index);
root.get('/post', post);


export default root;


//root.get('./(http에 적혀질 주소), controller에 있는 주소')
