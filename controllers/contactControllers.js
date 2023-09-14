const express = require('express')
const asyncHandler = require('express-async-handler')

//description - get all contacts
// route GET - /api/contacts
//access - public
const getAllConatacts =asyncHandler( async (req,res)=>{
    res.status(200).send("All contacts")
})

//description - craete contacts
// route  POST- /api/contacts
//access - public
const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone}= req.body
    if(!name||!email||!phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
   res.json(req.body)
    console.log(`req bodi is :${req.body.name}`)

})

//description - get one contact
// route  GET - /api/contacts:id
//access - public
const getContact =asyncHandler(async (req,res)=>{
    res.send(`contact for id:${req.params.id}`)
})

//description - update a contact
// route  PUT - /api/contacts:id
//access - public
const updateContact = asyncHandler(async(req,res)=>{
    res.send(`update the contact for id :${req.params.id}`)
})

//description - delete a  contacts
// route  DELETE- /api/contacts:id
//access - public
const deleteContact = asyncHandler(async(req,res)=>{
    res.send(`delete the contact for id :${req.params.id}`)
})

module.exports = {getAllConatacts,createContact,getContact,updateContact,deleteContact}
