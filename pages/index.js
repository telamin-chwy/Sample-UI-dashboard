import Hader from '../components/hader'
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Card from '../components/card';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';



export async function getStaticProps() {
  const res = await fetch ("http://localhost:8000/sources")
  const data = await res.json()
  return{
    props:{
      data
    }
  }
 }

const getTreeItemFromData = (data) => {
  return data.map((dataItems) => {
    let children = undefined;
    if (dataItems.children && dataItems.children.length > 0 ){
      children = getTreeItemFromData (dataItems.children)
    }
    return (
      <TreeItem
            collapseIcon={<ArrowDropDownIcon/>}
            expandIcon={<ArrowRightIcon/>}
            key={dataItems.id}
            nodeId={dataItems.id}
            label={dataItems.name}
            children={children}
            onClick={showCard}
          />
    )
    }
  )
}

const DataTreeView = ({ data }) => {
  return (
    <TreeView className='treeview'>

      {getTreeItemFromData(data)}

    </TreeView>
  );
};



export default function Home({data}) {
  return (
    <div>
    <Hader/> 
  <div className="flex-container">
    <DataTreeView data={data}/>
    
   </div> 
   </div>
  )
}
