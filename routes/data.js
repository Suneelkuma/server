const express=require('express')
const router=express.Router()

const Data=require('../models/dataSchema')

router.post('/data',async(req,res)=>{
    try {
        const datas=await Data.create(req.body)
        res.status(200).json({
            status:"Success",
            data:datas
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            message:error.message
        })
    }
})

module.exports=router