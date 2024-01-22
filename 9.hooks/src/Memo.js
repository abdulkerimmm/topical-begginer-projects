import {useEffect, useMemo, useRef, useState} from 'react';
import CustomText from './CustomText';

const MemoComponent=()=>{
   
  const [name,setName]=useState('-------  a.kerim setName')
                                                                      
  const memoName=useMemo(()=>{
       return name;
  },[])

  const [text,setText]=useState('')

    return(
        <div>
        {/* <Useeffectt/> */}
        here is our App 
         <CustomText/>
         <input type='text' onChange={(e)=>{setText(e.target.value)}} />
         setText:
         {text}
       
        
   

                   
        <button onClick={()=>{setName("yalcin")}}>cahnge name</button>
        <div>
          setstateName: 
          {name}
        </div>
        <div>
          for memoName: 
          {memoName}
        </div>
      </div>
    )
}

export default MemoComponent;