const express=require('express')
const router=express.Router()
const Company=require('../models/companySchema')
const Ad=require('../models/adSchema')
// Middleware to verify if company exists
const verifyCompany = async (req, res, next) => {
    try {
      const company = await Company.findById(req.body.companyId);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
  router.post('/ads', verifyCompany, async (req, res) => {
    try {
      const ad = new Ad(req.body);
      await ad.save();
      res.status(201).json({ message: 'Ad created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports=router