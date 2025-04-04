import React from 'react'
import "./../App.css"


const Bottle = ({bottles,addedCart}) => {
  const {image, name, color, price} = bottles
  return (
    <div className='card'>

        <div>  
        <img className='img' src={image} alt="" />
        <h1>{name}</h1>
        <h4>{color}</h4>
        <button className='p' onClick={()=>addedCart(bottles)}>{price} $</button>

        </div>
    </div>
  )
}

export default Bottle