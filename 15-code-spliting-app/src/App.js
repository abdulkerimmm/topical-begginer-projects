import React, {Suspense,useState} from 'react';
import './App.css';




const HelloLazy=React.lazy(()=>import('./Hello'))
const UtiliLazy=React.lazy(()=>import('./Utilites'))

function App() {
  const [state,setState]=useState(1)
  return (
    <div className="App">
      <header className="App-header">
         
         <Suspense fallback={<div>componentlar yuklenior...</div>}>
          {state===1 && <UtiliLazy></UtiliLazy>}
           {state===2 && <HelloLazy></HelloLazy>}
         </Suspense>


       
       <button  onClick={()=>{
          setState(state===1 ? 2 :1)
        }} >{state===1 ? "hello" : "lazy"} </button>
      
      </header>
    </div>
  );
}

export default App;
