'use strict';

import { index, feed} from './root.controller';
import router from 'koa-router';
import register from './controller/register';


const root = router();

root.get('/', index);
// root.get('/feed', feed);
root.post('/register', register);

export default root;


//root.get('./(http에 적혀질 주소), controller에 있는 주소')
