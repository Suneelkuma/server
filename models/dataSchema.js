const mongoose=require('mongoose');

const Schema=mongoose.Schema
const dataSchema=new Schema({
    companyId: Number,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
})

const dataModel=mongoose.model("DATA",dataSchema)

module.exports=dataModel;