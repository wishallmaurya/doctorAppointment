const express=require('express')
const morgan =require('morgan')
const dotenv=require('dotenv')
const connectDB =require('./config/db')

dotenv.config();

connectDB();

const app=express();
app.use(express.json())
app.use(morgan("dev")) 

app.use('/api/v1/user',require("./routes/userRoutes"))

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port} Mode on ${process.env.NODE_MODE} `)
})  