'use strict';
import mongoose from 'mongoose'
import bcrypt from 'bcrypt' //비밀번호 암호화? 하는 것인듯
import jwt from 'jsonwebtoken'


const User = new mongoose.Schema({
  userType: { type: String, default: 'Acting' },
  userName: { type: String, required: true },
  userUniv: { type: String, required: true },
  userImg: { type: String, default: 'Avatar' },
  password: { type: String, required: true },
  password_confirmation : { type: String, required: true },
  kindOfProject: { type: String, required: true },
  userProject: { type: String, required: true },
  userCompany: type: String,

})

export default mongoose.model('user', User)
