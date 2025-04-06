import React, { use, useState } from 'react'
import Bottle from './Bottle';
import "./../App.css"
const Bottles = ({getdataall}) => {

const [cart , setcart] = useState([]);

const addedCart = (bottles) =>{
const list = [...cart, bottles];
setcart(list)

}

const data = use(getdataall);


  return (
    <>
     {
      cart.map(res => <p>product name:{res.name}. product price: {res.price}</p>)
     }
    <div className='container'>
     
        {data.map(bottles => <Bottle 
        key={data.id}
        bottles = {bottles}
        addedCart ={addedCart}
        ></Bottle>)}
    </div>
    </>
  )
}

export default Bottles