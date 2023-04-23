const express=require('express')
const router=express.Router();
const Company=require("../models/companySchema")
router.post('/company',async(req,res)=>{
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'company created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    
})

module.exports=router