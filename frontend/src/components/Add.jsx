import { Box, Button, TextField } from "@mui/material";
import  { useEffect, useState } from "react";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();
  var [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };

  useEffect(() => {
    if (location.state && location.state.val) {
      setInputs(location.state.val); // Populate form with existing data
    }
  }, [location.state]);

  const addData = () => {
    //Write missing code here
    
    
  // axios.post("http://localhost:3001/add",inputs)
  // .then((res)=>{
  //   console.log(res);
  //   alert(res.data.message);
  //   navigate("/");
  // })
  // .catch((err)=>{
  //   console.log(err);
  // })
  

  if (location.state!==null) {
    axios.put("http://localhost:3001/update/"+location.state.val._id,inputs)
    .then((res)=>{
      console.log(res);
      alert(res.data.message);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  else{
    axios.post("http://localhost:3001/add",inputs)
.then((res)=>{
  console.log(res);
  alert(res.data.message);
  navigate("/");
})
.catch((err)=>{
  console.log(err);
})
  }
  
  };
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              // value={inputs.title}
              value={inputs.EmpName}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              // multiline={4}
              multiline={true}
            />
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
           

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
