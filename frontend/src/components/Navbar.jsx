//Write your missing code here

import { AppBar, Box, Button, IconButton, Toolbar, Typography, } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box  sx={{ flexGrow: 1 }}>
        <AppBar color='secondary' position="static">
          <Toolbar >
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography id='titleText' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee App
            </Typography> &nbsp;
            
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <Button id='add' color="inherit" ><HomeIcon/></Button>
            </Link>


            <Link to={'/add'} style={{textDecoration:'none',color:'white'}}>
            <Button id='view' color="inherit"><AddBoxIcon/></Button>
            </Link>
            

          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </div>
  )
}

export default Navbar
