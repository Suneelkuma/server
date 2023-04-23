const mongoose=require('mongoose');


const adSchema = new mongoose.Schema({
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company'
    },
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
  });
  
  const Ad = mongoose.model('Ad', adSchema);
  



module.exports=Ad;