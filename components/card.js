import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';





const card = (props) => {

  const getChildern = (props) => {
    return props.dependencies.map((dependencies) => {
      let children = undefined;
      if (dependencies && dependencies.length > 0 ){
        children = getChildern (dependenciesen)
      }
      return (
        <TreeItem
              collapseIcon={<ArrowDropDownIcon/>}
              expandIcon={<ArrowRightIcon/>}
              key={dependencies.name}
              nodeId={dependencies.id}
              label={dependencies.name}
              children={children}
            />
      )
      }
    )
  }
  const DataTreeView = ({props}) => {
    return (
      <TreeView
      className='treeview'
      >
  
        {getChildern(props)}
  
      </TreeView>
    );
  };

  return (
      <Paper variant='elevation' 
      className='paper' 
      sx={{fontFamily:"roboto"
      ,alignItems:"center"}} >
        
        <Typography color="primary" variant="small" 
        sx={{color:"black",
        flexGrow:1.5,
        marginLeft:2}}>{props.name} </Typography>
        
        <div className="health-div">
        <Typography color="primary" variant="small" 
        sx={{color:"black"}}>Https  <br/> Display </Typography>

        <Typography color="primary" variant="small" 
        sx={{color:"black"}}>Servelt<br/> Display </Typography>
        </div>
        <div className='dependencies'>
        <Typography  color="primary" variant="small" 
        sx={{color:"black" ,marginLeft:2}}>Dependencies<br/>  </Typography>
        <br/>
        <DataTreeView/>
        </div>

      </Paper>
  )
}

export default card
