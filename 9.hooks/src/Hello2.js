import React, { useContext } from 'react'
import { createContext } from 'react';
import {contexme} from './App'


 const Hello2 = () => {
   const {title}= useContext(contexme)
  return (
    
 <>
     merhaba dostum {title}
     
 </>
    
    
  )
}

export default Hello2;