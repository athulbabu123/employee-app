//Write missing code here
//import mongoose
var mongoose = require('mongoose');

const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

//model creation
var BlogModel=mongoose.model("sample",schema);

//exporting
module.exports=BlogModel