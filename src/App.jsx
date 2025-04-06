
import { Suspense } from 'react'
import './App.css'
import Bottles from './component/Bottles';




const getdata = fetch('./data.json').then(res => res.json())

function App() {

const addtocaer = () =>{
  
}


  return (
    <>
      <div>
        <h1></h1>
        <p></p>
      </div>

      <Suspense fallback = {<h1>data loading....</h1>}>
    <Bottles getdataall = {getdata}></Bottles>

      </Suspense>
    </>
  )
}

export default App
