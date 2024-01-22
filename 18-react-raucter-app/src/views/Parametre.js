import { useParams } from "react-router-dom";

const Parametre=()=>{
    const params=useParams();
    console.log("params:",params)
   const {id}=params;
    return(
      <div>
        Parametre {id}
        
      </div>
    )
}
export default Parametre