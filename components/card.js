import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { red } from '@mui/material/colors';




const card = (props) => {
  
  const depad = props
  // const getChildern = () => {
  //   return props.nestedSer.map((childrens) => {
  //     let children = undefined;
  //     if (childrens.children && childrens.children.length > 0 ){
  //       children = getChildern(childrens.children)
  //     }
  //     return (
  //       <TreeItem
  //             collapseIcon={<ArrowDropDownIcon/>}
  //             expandIcon={<ArrowRightIcon/>}
  //             key={childrens.name}
  //             nodeId={childrens.name}
  //             label={childrens.name}
  //             children={children}/>
  //     )
  //     }
  //   )
  // }
  // const DataTreeViewChildern = ({ props }) => {
  //   return (
  //     <TreeView
  //     >
  //       {getChildern(props)}

  //     </TreeView>
  //   );
  // };

  const arrOfErrorRateHttp = []
  const arrOfErrorRateServlet = []
  const httpErrorRateString = props.httpErrorRate
  const servletErrorRateString = props.servletErrorRate

  if(httpErrorRateString != null){
    httpErrorRateString.split("").forEach((char) =>{
      if(char == "*"){
        arrOfErrorRateHttp.push(<DoneOutlineIcon color="primary" fontSize="small" />)
      }
      else{
        arrOfErrorRateHttp.push(<CancelIcon sx={{color:'red'}} fontSize="small"/>)
      }
      return(
        {arrOfErrorRateHttp}
      )
    })
  }
  if(servletErrorRateString != null){
    servletErrorRateString.split("").forEach((char) =>{
      if(char == "*"){
        arrOfErrorRateServlet.push(<DoneOutlineIcon color="primary" fontSize="small"/>)
      }
      else{
        arrOfErrorRateServlet.push(<CancelIcon sx={{color:'red'}} fontSize="small"/>)
      }
      return(
        {arrOfErrorRateServlet}
      )
    })
  }
  return (

      <Paper variant='elevation' 
      className='paper' 
      sx={{fontFamily:"roboto"
      ,alignItems:"center"}} 
      >
        
        <Typography color="primary" variant="small" 
        sx={{color:"black",
        flexGrow:1.5,
        marginLeft:2}}>{props.name} </Typography>
        
        <div className="health-div">
        
        { props.httpErrorRate != null && 
         <Typography color="primary" variant="small" 
          sx={{color:"black"}}> Https
          <br/>
          {arrOfErrorRateHttp}
          </Typography>}

       { props.servletErrorRate != null && 
       <Typography color="primary" variant="small" 
        sx={{color:"black"}}>Servelt <br/>
         {arrOfErrorRateServlet} </Typography>}
        
        </div>
        <div className='dependencies'>
        <Typography  color="primary" variant="small" 
        sx={{color:"black" ,marginLeft:2}}><br/>  </Typography>
        <br/>
        {/* <DataTreeViewChildern displayNames ={props}/> */}
        </div>

      </Paper>
  )
}

export default card
