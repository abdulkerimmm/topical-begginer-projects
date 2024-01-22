import { FETCH_DATA, SET_USERNAME } from './../actionTypes/userType';


export const changeName=(str)=>{
  return  {
        type:SET_USERNAME,
        payload:str
      }

}
  

export const fetchData=()=>{

  return  (dispatch)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response=>response.json)
       .then(json=>{
        console.log("json",json)
        dispatch({
        type:FETCH_DATA,
        payload:json
       })
      })
      }
}

