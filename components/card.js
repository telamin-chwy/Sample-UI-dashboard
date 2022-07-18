import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react';





const card = () => {
  

  return (
      <Paper variant='elevation' className='paper' sx={{fontFamily:"roboto",display:"flex",alignItems:"center"}} >
        <Typography color="primary" variant="small" sx={{color:"black",flexGrow:1.5,marginLeft:2}}>Postgresql </Typography>
        <Typography color="primary" variant="small" sx={{color:"black",flexGrow:1}}>Https <br/> <Rating defaultValue={8} max={8} readOnly={true}/> </Typography>
        <Typography color="primary" variant="small" sx={{color:"black",flexGrow:1}}>Servelt<br/> <Rating defaultValue={8} max={8} readOnly={true}/> </Typography>
      </Paper>
  )
}

export default card
