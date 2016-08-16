'use strict';

import { createFeed, getFeeds, updateFeed, deleteFeed } from './feed.controller';
import router from 'koa-router';


const feed = router();

feed.post('/feed', createFeed);
feed.get('/feed', getFeeds);


export default feed;
