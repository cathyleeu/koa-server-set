'use strict';

import { index } from './root.controller';
import router from 'koa-router';

const root = router();

root.get('/', index);


export default root;


//root.get('./(http에 적혀질 주소), controller에 있는 주소')
