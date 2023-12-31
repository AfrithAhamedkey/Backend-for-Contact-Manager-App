const express = require('express')
const router = express.Router();
const {getAllConatacts,
    getContact,
    updateContact,
    deleteContact,
    createContact}= require('../controllers/contactControllers')

router.route('/').get(getAllConatacts)
router.route('/:id').get(getContact)
router.route('/').post(createContact)
router.route('/:id').put(updateContact)
router.route('/:id').delete(deleteContact)


module.exports = router;