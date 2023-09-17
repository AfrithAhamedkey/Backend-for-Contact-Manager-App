const express = require('express');
const userrouter  = express.Router();
const {userRegister,userLogin,currentUser}= require('../controllers/userControllers')

userrouter.post('/register',userRegister)
userrouter.post('/login',userLogin)
userrouter.get('/currentuser',currentUser)


module.exports = userrouter