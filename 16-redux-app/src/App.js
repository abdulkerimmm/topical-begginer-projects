import Header from "./components/Header"
import './App.css';
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import ContentBody from "./components/ContentBody";
import { SET_USERNAME } from './store/actions/actionCount';

import { changeName,fetchData } from './store/actions/actionUser';

function App() {
  const [userName,setUserName]=useState("abdulkerim")
   const name=useSelector((state=>state.user))
   const dispatch=useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        
       in app: 
       {name.user}

       <button onClick={()=>{
        dispatch(fetchData())
       }}>fetch ile senkrazsyon</button>

       <button onClick={()=>{
             dispatch(changeName("kemal"))   
       }} >change name</button>
        


        <Header userName={userName}></Header>
        <ContentBody>   </ContentBody>
        
      </header>
    </div>
  );
}

export default App;
