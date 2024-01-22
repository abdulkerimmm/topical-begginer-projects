import { useCallback, useEffect, useMemo, useReducer, useRef, useState, createContext } from 'react';
import './App.css';
  import Hello from './Hello'
  import Hello2 from './Hello2';
  import Memo from './Memo'



export const contexme=createContext()

const Component1=({children})=>{  
  const [title,setTitle]=useState("ali");
  return(
    //  <contexme.Provider value={{title,setTitle}}>
    //        {children}
    //  </contexme.Provider>
    <Memo></Memo>
 )}

function App() {

    return (  
      
     

      <Component1>
 
        
       
    <div className="App">
     <Hello2></Hello2>
     <Hello></Hello>
    </div>
    </Component1>

  );
}
                     
export default App;
