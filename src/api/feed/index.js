'use strict';

import { createFeed, getFeeds, updateFeed, deleteFeed } from './feed.controller';
import router from 'koa-router';


const feed = router();

feed.post('/', createFeed);
feed.get('/', getFeeds);


export default feed;
