'use strict';

import { createUser, getUsers, getUser } from './user.controller';
import router from 'koa-router';

const user = router();

user.post('/', createUser);
user.get('/', getUsers);
// user.get('/:id', getUser);

export default user;
