let userModel =require('../models/userModel')
let bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken')

let registerController =async(req,res)=>{
    try {
        let existingUser=await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({success:false,message:`User already exist`})
        }
        let password =req.body.password
        let salt =await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password,salt)
        req.body.password=hashedPassword

        let newUser= new userModel(req.body)
        await newUser.save()
        res.status(201).send({success:true,message:`Register Successfully`})


    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:`Register Controller ${error}`})
    }
}



let loginController=async(req,res)=>{
    try {
        let user=await userModel.findOne({email:req.body.email})
    if(!user){
        return res.status(200).send({success:false,message:`User doesn't exist`})
    }
    const isMatch =await bcrypt.compare(req.body.password,user.password)
    if(!isMatch){
        return res.status(200).send({success:false,message:`Wrong Password`})
    }
    const token=jwt.sign({id:user._id},process.env.JWT_TOKEN,{expiresIn:"1d"})
    res.status(200).send({success:true,message:"Login Successfully",token:token})

        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:`Error in Login ${error.message}`})

    }
}

const authController=async(req,res)=>{
       try {
        const user=await userModel.findOne({_id:req.body.userId})
        if(!user){
            return res.status(200).send({success:false,message:`User not Found`})
        }else{
            res.status(200).send({success:true,data:{
                name:user.name,
                email:user.email,
            },})
        }

       } catch (error) {
        console.log(error);
        return res.status(500).send({success : false , message : `Auth failed `,error:error})

       }
}










module.exports.registerController=registerController
module.exports.loginController=loginController
module.exports.authController=authController
