import React from 'react'

const functionCount=new Set();

export const UseCalback = () => {
    const [counter,setCounter]=useState(0);
  const [otherCounter,setOtherCounter]=useState(0);
  
  // const increment=()=>{
  //   setCounter(counter+1);
  // }
  // const decrement=()=>{
  //   setCounter(counter-1);
  // }
  // const incrementOtherCounter=()=>{
  //   setOtherCounter(otherCounter+1);
  // }

 const increment=useCallback=(()=>{
  setCounter(counter+1);
 },[counter])

 const decrement=useCallback=(()=>{
  setCounter(counter+1);
 },[counter])
 
 const incrementOtherCounter=(()=>{
  setOtherCounter(otherCounter+1);
 },[otherCounter])

  functionCount.add(increment);
  functionCount.add(decrement);
  functionCount.add(incrementOtherCounter);
  console.log(functionCount)


  return (
    <div>
          <header className='App-header'>
        counter:{counter}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={incrementOtherCounter}>otherCounter increment</button>
      
      </header>
    </div>
  )
}
