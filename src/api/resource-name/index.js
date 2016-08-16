'use strict';

import { index } from './resource-name.controller';
import router from 'koa-router';

const resource-name = router();

resource-name.get('/', index);

export default resource-name;
