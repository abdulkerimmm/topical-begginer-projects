
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const QuerySearch=()=>{
    const [searchParams]=useSearchParams();
    console.log("searchparams:",)
    const location=useLocation();
    console.log("location:",location)
    return(
      <div>
        
       Query Parametre
         {searchParams.get('araba')} <br/>
         {searchParams.get('gel')}   <br/>
         {searchParams.get('git')}    <br/>
         {searchParams.get('dur')}   

        
      </div>
    )
}
export default QuerySearch  