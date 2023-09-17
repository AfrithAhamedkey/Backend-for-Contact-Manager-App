const express = require('express');
const dotevn = require('dotenv').config()
const PORT = process.env.PORT || 3000
const router = require('./routes/contactRoutes')
const errorHandler = require('./middlewares/errorHandlers')
const connectDb = require('./config/dbConnetion')
const userrouter = require('./routes/userRoutes')

connectDb();
const app = express()


app.use(express.json())


app.use('/api/contact',router)
app.use('/api/users',userrouter)// have same name in this file and userRoutes file.

app.use(errorHandler)





app.listen(PORT,()=>{
    console.log(`Server is listining on port :${PORT}`)
})