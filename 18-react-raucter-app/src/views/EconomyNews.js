
import { Outlet, useParams } from 'react-router-dom';

const EconomyNews=()=>{
    const {id}=useParams();
    return(

        <div>
            <div>
             <Outlet></Outlet>
            </div>
            {id}
        </div>
    )
}
export default EconomyNews