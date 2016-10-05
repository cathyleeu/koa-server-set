'use strict';

import { createUser, allUsers, getUser } from './user.controller';
import router from 'koa-router';

const user = router();

user.get('/', allUsers);
user.post('/', createUser);
user.post('/getUser', getUser);

export default user;
