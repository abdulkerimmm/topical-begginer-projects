import {useEffect, useMemo, useRef, useState} from 'react';
import './App.css';
import CustomText from './CustomText';
import { Useeffectt } from './Useeffectt';
import CustomBtn from './Button';
                     
function App() {
                         
   const [text,setText]=useState('abdulkerim')
  const [name,setName]=useState('-------  a.kerim setName')
                                                                      
  const memoName=useMemo(()=>{
       return name;
  },[])
   
  const btnRef=useRef(null);

  return (
    <div className="App">
      
   
     
      <CustomBtn ref={btnRef} text="custoom ref button"/>
      
      <button onClick={()=>{
        btnRef.current.addEventListener('click',()=>{alert("tiklandi")})
        console.log(btnRef.current.innerText);
      }}
      >ref degeri nedir</button>
   

    </div>
  );
}
                     
export default App;
