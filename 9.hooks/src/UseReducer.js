import React from 'react'

const initialState={
    count:0
 }
 

const reducer=(state,{type,payload})=>{

    switch(type){
      case "increament":
        return{count:state.count+payload}
  
        case "descreament":
      return{count:state.count-payload}
  
      default:return 0
    }
  }

export const UseReducer = () => {
    
    const[state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>
       {state.count}
    
    <button onClick={()=>{
      dispatch({ type:"increament",payload:10})
    }}>increament</button>

<button onClick={()=>{
      dispatch({ type:"descreament",payload:10})
    }}>descreament</button> 
    </div>
  )
}
