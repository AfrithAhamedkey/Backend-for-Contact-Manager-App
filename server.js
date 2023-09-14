const express = require('express');
const dotevn = require('dotenv').config()
const PORT = process.env.PORT || 3000
const router = require('./routes/contactRoutes')
const errorHandler = require('./middlewares/errorHandlers')
const app = express()


app.use(express.json())
app.use(errorHandler)

app.use('/api/contact',router)







app.listen(PORT,()=>{
    console.log(`Server is listining on port :${PORT}`)
})