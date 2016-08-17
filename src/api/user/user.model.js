'use strict';
import mongoose from 'mongoose'
import config from '../../config';
import bcrypt from 'bcrypt' //비밀번호 암호화? 하는 것인듯
import jwt from 'jsonwebtoken'


const User = new mongoose.Schema({
  usertype: { type: String, default: 'Acting' },
  username: { type: String, required: true },
  useruniv: { type: String, required: true },
  userimg: { type: String, default: 'Avatar' },
  password: { type: String, required: true }
})

User.pre('save', function preSave(next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return reject(err) }
      resolve(salt)
    })
  })
  .then(salt => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { throw new Error(err)}
      user.password = hash
      next(null)
    })
  })
  .catch(err => next(err))
})

User.methods.validatePassword = function validatePassword(password) {
  const user = this

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) { return reject(err) }

      resolve(isMatch)
    })
  })
}

// User.methods.generateToken = function generateToken() {
//   const user = this
//
//   return jwt.sign({ id: user.id }, config.token)
// }



// export function list() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([]);
//     });
//   });
// }
