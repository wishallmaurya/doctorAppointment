const mongoose =require('mongoose')
mongoose.set('strictQuery', false);

const connectDB= async()=>{
    try {
       await mongoose.connect(process.env.MONGODB)
       console.log(`MongoDB Connected ${mongoose.connection.host} `);
    } catch (error) {
        console.log(`Mongoose error ${error}`);
    }
}
module.exports = connectDB