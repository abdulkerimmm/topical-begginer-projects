import React from 'react';
import {useEffect, useState} from 'react';

export const Useeffectt = () => {
    const [number,setNumber]=useState(0);
  const [array,setArray]=useState([]);
  const [text,setText]=useState("")

useEffect(()=>{
  console.log("I dscribed useffect")
},[])
useEffect(()=>{
  console.log("ben surekli calisiyorum")
})
useEffect(()=>{
  console.log("ben sadece Number icin calisirim")
},[number])
useEffect(()=>{
  console.log("Ben Sadece Array icn calisiyorum")
},[array])
  return (
    <div>
        <header className='App-header'>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={()=>{
          setNumber(Math.random())}
          }>number</button>
          <button onClick={()=>{
          setArray([1,2,3,4])}
          }>array</button>
         {number}
         <br/>
         useEffect hooks

         
      </header>
    </div>
  )
}
export default Useeffectt;