const mongoose=require('mongoose')

// Define company schema and model
const companySchema = new mongoose.Schema({
    name: String,
    url: String,
  });
  
  const Company = mongoose.model('Company', companySchema);

  module.exports=Company