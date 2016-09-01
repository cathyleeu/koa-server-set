'use strict';

import { createFeed, getFeeds, updateFeed, deleteFeed, incLike, decLike } from './feed.controller';
import router from 'koa-router';


const feed = router();

feed.post('/', createFeed);
feed.get('/', getFeeds);
feed.post('/incLike', incLike);
feed.post('/decLike', decLike);


export default feed;
