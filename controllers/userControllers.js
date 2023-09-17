const bcrypt = require('bcrypt')
const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')

//description - Register the user
// route GET - /api/users/register
//access - public
const userRegister =asyncHandler( async (req,res)=>{
    const {name,email,password} = req.body;
   const availableUser = await User.findOne({email});
   if(!name||!email||!password){
    res.status(400).send("Fill All User details")
   }
   if(availableUser){
       res.status(201).send("User already Available")
   }
    const hashedpassword = await bcrypt.hash(password,10)
    const newUser = await User.create({
        name,
        email,
        password:hashedpassword //should be String
    })
   res.status(201).json(newUser)
})

//description - Register the user
// route GET - /api/users/login
//access - public
const userLogin =asyncHandler( async (req,res)=>{
    res.json({message:"user Login"})
 })

 //description - Register the user
// route GET - /api/users/currentuser
//access - private
const currentUser =asyncHandler( async (req,res)=>{
    res.json({message:"current user"})
 })
 


module.exports = {userRegister,userLogin,currentUser}