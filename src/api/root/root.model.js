'use strict';

import config from '../../config';

export function list() {
  return new Promise((resolve) => {
    setTimeout(() => { //  resolve(config) resolve일종의 return
      // 의미 있는거 아녕~
      resolve(config);
    });
  });
}

export function list2() {
  return new Promise((resolve) => {
    setTimeout(() => { //  resolve(config) resolve일종의 return
      // 의미 있는거 아녕~
      resolve({
        a: 1,
        b: 2
      });
    });
  });
}
