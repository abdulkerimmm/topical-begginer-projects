import Content from "./Content"
import { useSelector } from "react-redux/es/exports"


const Header=(props)=>{
    const state=useSelector((state=>state.count))
    console.log(state.count)
    return(
        <div>
          
      in header: {state.count}
       <Content  userName2={props.userName}> </Content>
      
       </div>
    )
}
export default Header   