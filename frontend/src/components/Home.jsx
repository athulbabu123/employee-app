import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);
  var navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const delvalue=(id)=>{
    console.log(id);
    axios.delete("http://localhost:3001/remove/"+id)
    .then((res)=>{
      alert(res.data.message);
      window.location.reload();
      refresh();
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  const updatevalue=(val)=>{
    console.log("update clicked",val);
    navigate("/add", { state: {val}});
  }


  return (


    
    
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt="image"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button onClick={()=>{delvalue((val._id))}} size="small" variant="contained" color="secondary">
                  Delete
                </Button>
                <Button onClick={()=>{updatevalue((val))}}  size="small" variant="contained" color="secondary">
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  );
};

export default Home;
