import React from 'react'
import Card from '../components/card'

const DataNames = (props) => {
  return (
    <div>
      <Card name={props.name}/>
      <>{props.name}</>
    </div>
  )
}

export default DataNames
