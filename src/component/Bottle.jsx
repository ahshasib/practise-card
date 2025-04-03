import React from 'react'
import "./../App.css"


const Bottle = ({bottles}) => {
  return (
    <div className='card'>

        <div>
        <img className='img' src={bottles.image} alt="" />
        <h1>{bottles.name}</h1>
        <h4>{bottles.color}</h4>
        <p className='p'>{bottles.price} $</p>

        </div>
    </div>
  )
}

export default Bottle