const express = require('express')
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()
app.use(cors())


const authRoute = require('./routes/auth');
const videoRoute = require('./routes/video')
const videoCategoryRoute = require('./routes/category')
const videoSaveRoute = require('./routes/savevideo')
//Connection to DB
require('./DB/initDB')

//Middleware
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("Server is running ... ")
})

//Route Middlewares
app.use('/api/user',authRoute);
app.use('/save',videoRoute);
app.use('/video/category',videoCategoryRoute);
app.use('/video',videoSaveRoute);

app.listen(8000,()=> console.log("Server Running ..."))