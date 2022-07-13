import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const card = (props) => {
  return (
    <div>
      <Paper variant='elevation' className='paper' >
        <Typography color="primary" variant="h6">Servics : {props.name}</Typography>
        <Typography color="primary" variant="h6">health : {props.health}</Typography>
        <Typography color="primary" variant="h6">independencies : {props.children}</Typography>

      </Paper>
    </div>
  )
}

export default card
