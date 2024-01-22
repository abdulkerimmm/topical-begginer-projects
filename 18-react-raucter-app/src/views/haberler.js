import { Outlet } from "react-router-dom"

const Haberler=()=>{
    return(
        <div>
          
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Haberler