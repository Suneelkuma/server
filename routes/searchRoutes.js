const express=require('express');

const router=express.Router();
const Ad=require('../models/adSchema')
router.use(express.json())
// Define search endpoint
router.get('/search', async (req, res) => {
    const keyword = req.query.keyword;
  console.log(keyword);
    try {
      const ads = await Ad.aggregate([
        {
          $lookup: {
            from: 'companies',
            localField: 'companyId',
            foreignField: '_id',
            as: 'company',
          },
        },
        {
          $match: {
            $or: [
              { primaryText: { $regex: keyword, $options: 'i' } },
              { headline: { $regex: keyword, $options: 'i' } },
              { description: { $regex: keyword, $options: 'i' } },
              { 'company.name': { $regex: keyword, $options: 'i' } },
            ],
          },
        },
        {
          $unwind: '$company',
        },
        {
          $project: {
            _id: 0,
            company: '$company.name',
            primaryText: 1,
            headline: 1,
            description: 1,
            CTA: 1,
            imageUrl: 1,
          },
        },
      ]);
  
      res.json(ads);
      console.log(ads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports=router
  