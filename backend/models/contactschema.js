const mongoose = require("mongoose");
const contactschema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim:true,
  },
  email: {
    type: String,
    required:true,
    trim:true,
  },
  feedback:{
    type:String,
    require:true,
    trim:true
  }
  
});
const Contact = new mongoose.model("Contact", contactschema);
module.exports = Contact;
