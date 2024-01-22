
import { useNavigate } from 'react-router-dom'
import React from 'react'


 const Mainview = () => {
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>{
            navigate("/user")
        }}>go to UserView</button>
        here is mainview
    </div>
  )
}

export default Mainview