const express = require('express')
const asyncHandler = require('express-async-handler')
const Contact = require('../model/contactModel')

//description - get all contacts
// route GET - /api/contact
//access - public
const getAllConatacts =asyncHandler( async (req,res)=>{
    const contact = await Contact.find()
    res.status(200).json(contact)
})

//description - create contacts
// route  POST- /api/contact
//access - public
const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone}= req.body
    if(!name||!email||!phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
      const contact = await Contact.create({
        name,email,phone
      });
      res.status(200).json(contact)
})

//description - get one contact
// route  GET - /api/contact:id
//access - public
const getContact =asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const contact = await Contact.findById(id)
    if(!contact){
        res.status(404).send("Contact not found")
    }
    res.status(200).json(contact)
})

//description - update a contact
// route  PUT - /api/contact:id
//access - public
const updateContact = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const contact = await Contact.findById(id)
    if(!contact){
        res.status(404).send("Contact not found")
    }
    const updatecontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
     res.status(200).json(updatecontact)
})

//description - delete a  contacts
// route  DELETE- /api/contact:id
//access - public
const deleteContact = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const contact = await Contact.findById(id)
    if(!contact){
        res.status(404)
        throw new Error("Contact noy found")
    }
    
    const deletecontact=  await Contact.remove(contact)
     res.status(200).json(deletecontact)
})

module.exports = {getAllConatacts,createContact,getContact,updateContact,deleteContact}
