import React, { use } from 'react'
import Bottle from './Bottle';
import "./../App.css"
const Bottles = ({getdataall}) => {
const data = use(getdataall);
console.log(data)

  return (
    <div className='container'>
        {data.map(bottles => <Bottle bottles = {bottles}></Bottle>)}
    </div>
  )
}

export default Bottles