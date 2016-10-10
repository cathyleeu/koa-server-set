'use strict';

import { createUser, allUsers, getUser, login } from './user.controller';
import router from 'koa-router';

const user = router();

user.get('/', allUsers);
user.post('/', createUser);
user.post('/getUser', getUser);
user.post('/login', login)

export default user;
