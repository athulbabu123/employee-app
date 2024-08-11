const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here
var BlogModel = require('./model');

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get('/get',async(req,res)=>{
  try {
      var data = await BlogModel.find();
      res.send(data)
  } catch (error) {
      console.log(error);
  }
})

//api to delete employee
app.delete('/remove/:a',async(req,res)=>{
  console.log(req.params.a);
  try {
      var id = req.params.a;
      var data = await BlogModel.findByIdAndDelete(id);
      res.send({message : "data deleted succesfully"})
  } catch (error) {
      console.log(error);
  }
})

//api to update employee
app.put('/update/:a',async(req,res)=>{
  console.log(req.params.a);
  try {
      var id = req.params.a;
      var data = await BlogModel.findByIdAndUpdate(id,req.body);
      res.send({message : "data updated succesfully!!",data})
  } catch (error) {
      console.log(error);
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
