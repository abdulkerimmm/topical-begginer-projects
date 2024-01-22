import { useSelector,useDispatch } from "react-redux";
import { type } from '@testing-library/user-event/dist/type';
import { decrement } from './../store/actions/actionCount';




const Content=(props)=>{
//  const sayi=useSelector(state=>state.count)

  const dispatch=useDispatch();
  return(
    <div>

        {props.userName2} in Content:
        {/* {sayi} */}

    <button onClick={()=>{
      dispatch( decrement(5))
    }}>DECREMENT in Content </button>
        
     
       

    </div>
  )
}

export default Content;



