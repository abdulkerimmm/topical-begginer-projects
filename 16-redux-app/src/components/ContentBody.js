import { useDispatch } from "react-redux/es/exports"
import { increment } from "../store/actions/actionCount"

const ContentBody=()=>{
    const dispatch=useDispatch()  
 return(
    <div>
    
      <button onClick={()=>{
          dispatch(increment(10)) 
      }}>increment</button>

    </div>
 )
}
export default ContentBody