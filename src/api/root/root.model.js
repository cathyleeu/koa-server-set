'use strict';

import config from '../../config';
import mongoose from 'mongoose';
import post from './model/post'

export function list() {
  return new Promise((resolve) => {
    setTimeout(() => { //  resolve(config) resolve일종의 return
      // // 의미 있는거 아녕
      // var kittySchema = mongoose.Schema({
      //     name: String
      // });
      // var Kitten = mongoose.model('cats', kittySchema);
      // var res = Kitten.find({ name: 'Zildjian' });
      // var zizi = mongoose.get('Cat').find({'name':'Zildjian'});
      resolve(config);
    });
  });
}

export function post() {
  return new Promise((resolve) => {
    setTimeout(() => { //  resolve(config) resolve일종의 return
      // 의미 있는거 아녕~
      resolve(post);
    });
  });
}
