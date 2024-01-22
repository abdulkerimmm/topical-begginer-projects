import React,{useRef} from 'react';
import InnerText from './Innertext';



const textRef=useRef();

export const UseRef = () => {
  return (
    <div>
         <button onClick={()=>{
     textRef.current.onaValidate() 
      }} >value goster</button>
     <InnerText ref={textRef} ></InnerText>
   

    </div>
  )
}
