import react,{useContext} from 'react'
import Hello2 from './Hello2'
import {contexme} from './App'
const Hello=()=>{
    const {setTitle,title}= useContext(contexme)
    return(
        <div>
         <button onClick={()=>{
            setTitle(Math.random().toString())
         }}>absdlkfalsd</button>
         {title}
        </div>
    )
}

export default Hello;