import React from 'react'
import { useNavigate } from 'react-router-dom'

 const UserView = () => {
    const navigate=useNavigate();
  return (
    <div>
         <button onClick={()=>{
            navigate("/")
        }}>go to mainview</button>
        you come userView
    </div>
  )
}

export default UserView