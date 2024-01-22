import react, {useEffect, useRef, useState} from 'react';
import './App.css';
import Portal from './components/Portal';




function App() {

  // const consolid=useRef()
  // const arruseRef=useRef()
  const customTarget =useRef()
  const [isExit,setisExit]=useState(false)
  const [target,setTarget]=useState(document.body)
  const [targetText,setTargetText]=useState("body Area")

  useEffect(()=>{
    if(customTarget.current){
      setisExit(true)
    }
  },[customTarget])

  // useEffect(()=>{
  //   if(consolid.current){
  //     consolid.current.addEventListener("focus",()=>{console.log("focus oldu")})            
  //   }
 
  // },[consolid])

  return (
    
    <div>
     
     <div ref={customTarget}>
          fenerbahce
     </div>
    
    <button onClick={()=>{
      if(targetText==="body Area"){
        setTargetText("customTarget Area")
        setTarget(customTarget.current);        
      }
      else{
        setTargetText("Body Area")
        setTarget(document.body);
      }
    }}> yerini degistir</button>

     <  Portal text={targetText} target={target} />
      
{/*     
      {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
        return(
         <div
          key={i} 
          ref={arruseRef} 
          style={{width:`${(i+0.5)*100}px`,background:"blue", height:"20px"}} />
        )
      })} */}
     {/* el=>arruseRef.current[i]=el */}
{/* 
      <input className='mdd ere no bele' ref={consolid}></input>
      <button onClick={()=>{
          console.log(arruseRef)  
          console.log(consolid.current.value)
          console.log(consolid.current.clasList)
      }}>metnin icerigini yazdir</button> */}


    </div>
  );
}

export default App;
 


// import React from "react"

// export default function App() {
//         const [obj,setObj]=React.useState({
//         email:"",
//         password:"",
//         password2:"",
//         isTrue:true
//     })
//     const [key, setKey] = React.useState(false)
      
 
    
//     function handleSubmit(event) {
//         setKey(prev => !prev)
//         event.preventDefault()
//         const {name, value,type,checked} = event.target
//         console.log(checked, name)
//         setObj(prevState=> {
//           return {...prevState, [name] : type === "checkbox" ? new Boolean(checked)  : value}
//           }
//         )
       
//     }
    
//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     placeholder="Email address"
//                     className="form--input"
//                     value={obj.email}
//                     onChange={handleSubmit}
//                     name='email'
                   
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password"
//                     className="form--input"
//                     value={obj.password}
//                     onChange={handleSubmit}
//                     name='password'
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Confirm password"
//                     className="form--input"
//                     value={obj.password2}
//                     onChange={(e) => {
//                         handleSubmit(e)
//                     }}
//                     name='password2'
//                 />
                
//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"
//                         checked={obj.isTrue}
//                     onChange={(e) => {
// console.log('reun')
//                         handleSubmit(e)
//                     }}                        name="isTrue" 
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button 
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
                           
//             </form>
//         </div>
//     )
// }

