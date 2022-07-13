// import Head from 'next/head'
import Hader from '../components/hader'
// import Footer from '../components/footer'
import TreeViw from '../components/tree'
// import FakeAPI from '../components/fakeAPI'
// import Api from '../components/Api'
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Card from '../components/card';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export async function getStaticProps() {
  const res = await fetch ("http://localhost:8000/services")
  const data = await res.json()
  return{
    props:{
      data
    }
  }
 }
//  export const seasons = [
//   {
//     id: 1,
//     name: "Seasons",
//     children: [
//       {
//         id: 2,
//         name: "Summer",
//         children: [
//           {
//             id: 3,
//             name: "Hot",
//             children: [
//               {
//                 id: 4,
//                 name: "June",
//                 route: "/June"
//               },
//               {
//                 id: 5,
//                 name: "July",
//                 route: "/July"
//               }
//             ]
//           },

//           {
//             id: 6,
//             name: "August",
//             route: "/August"
//           }
//         ]
//       },
//       {
//         id: 7,
//         name: "Fall",
//         children: [
//           {
//             id: 8,
//             name: "September",
//             route: "/September"
//           },
//           {
//             id: 9,
//             name: "October",
//             route: "/October"
//           },
//           {
//             id: 10,
//             name: "November",
//             route: "/November"
//           }
//         ]
//       },
//       {
//         id: 11,
//         name: "Winter",
//         children: [
//           {
//             id: 12,
//             name: "December",
//             route: "/December"
//           },
//           {
//             id: 13,
//             name: "January",
//             route: "/January"
//           },
//           {
//             id: 14,
//             name: "February",
//             route: "/February"
//           }
//         ]
//       }
//     ]
//   }
// ];
const getTreeItemFromData = (data) => {
  return data.map((dataItems) => {
    let children = undefined;
    console.log(dataItems)
    if (dataItems.children && dataItems.children.length > 0 ){
      children = getTreeItemFromData (dataItems.children)
    }
    console.log(dataItems)
    return (
      <TreeItem
            collapseIcon={<ArrowDropDownIcon/>}
            expandIcon={<ArrowRightIcon/>}
            key={dataItems.id}
            nodeId={dataItems.id}
            label={dataItems.name}
            children={children}
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
    <DataTreeView data={data}/>
   </div> 
  )
}
