import Hader from '../components/hader'
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Card from '../components/card';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react';


export async function getStaticProps() {
  const res = await fetch ("http://localhost:8000/sources")
  const data = await res.json()
  return{
    props:{
      data
    }
  }
 }
 

export default function Home({data}) {
  
  const [sName, setSName] = useState("");
  const[DisplayDepe, setDisplayDepe] = useState("")

  const getServiceData = (dataItems) => {
    setSName(dataItems.name);
    // setDisplayDepe(children);
    }
  
  var nodeIds = []
  const getTreeItemFromData = (data) => {
    return data.map((dataItems) => {
      nodeIds.push(dataItems.id)
      let children = undefined;
      if (dataItems.children && dataItems.children.length > 0 ){
        children = getTreeItemFromData (dataItems.children)
      }
      return (
        <TreeItem
              collapseIcon={<ArrowDropDownIcon/>}
              expandIcon={<ArrowRightIcon/>}
              key={dataItems.name}
              nodeId={dataItems.id}
              label={dataItems.name}
              children={children}
              onClick={()=>getServiceData(dataItems)}
            />
      )
      }
    )
  }
  const DataTreeView = ({ data }) => {
    return (
      <TreeView
      defaultExpanded={nodeIds}
      className='treeview'
      >
  
        {getTreeItemFromData(data)}
  
      </TreeView>
    );
  };

  return (
    <div>
    <Hader/> 
  <div className="flex-container">
    <DataTreeView 
    data={data}/>
      <Card name={sName}/>

    
   </div> 
   </div>
  )
}





