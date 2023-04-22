const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userSchema=new mongoose.Schema(
    {
        name:{type:String ,required:true},
        email:{type:String ,required:true,unique:true},
        
      
        password:{type:String, required:true},
       
        tokens:[{
            token:{type:String ,required:true}
                }
                    
                ]
},


)


module.exports=user