import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { IconButton, Icon, makeStyles } from '@mui/material';






const Hader = () => {
  return (
        <AppBar position='static' className='bar'>
        <Toolbar>
        <Typography variant='h5'>
            Chewy Services
            </Typography>
            <TextField
              
              label="Search..."
              variant="outlined"
              size="small"
              sx={{marginLeft:"auto"}}
              InputProps={{
                endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon sx={{color:"white"}}/>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
          </Toolbar>
        </AppBar>
  )
}

export default Hader
