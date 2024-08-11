const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect(
   "mongodb+srv://athulbabu123:athul@cluster0.5kctyfs.mongodb.net/EmployeeApp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
