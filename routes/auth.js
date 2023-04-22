const express=require('express')
const bcrypt=require("bcryptjs")
const router=express.Router();
router.use(express.json())
const User=require('../models/userSchema')
const cookieparser=require("cookie-parser")
const middleware=require("../middleware/authenticate")
router.use(cookieparser())
router.get('/',(req,res)=>{
    res.send("hello from router")
})
router.post('/registers',async(req,res)=>{

    try {
        const {name,email,phone,password,work}=req.body

if(!name|| !email||  !password){
    return res.status(4).json({message:"Please fill all the data"})
}
const userExist=await User.findOne({email:email})
if(userExist){
    return res.status(422).json({message:"email already exist"})
}
        const user=await User.create({name,email,phone,password,work});
// hash pasword in user Schema

       await user.save();
        res.status(200).json({
            status:"Success",
            data:user
        })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:error.message
        })
    }
})

module.exports=router