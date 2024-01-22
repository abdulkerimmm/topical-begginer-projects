import React, { useEffect, useState } from 'react'

 const UseWindowSize = () => {
    const [windowSize,setWindowSize]=useState({height:0,width:0})
           
             
     const changeWindowSize=()=>{
        setWindowSize({height:window.innerHeight,width:window.innerWidth})
     }

        

     useEffect(()=>{
        window.addEventListener('resize',changeWindowSize) 
      
        
        return ()=>{                                                  
             window.removeEventListener('resize',changeWindowSize)
            
        }
     },[])



  return windowSize
    
  
}
export default UseWindowSize
