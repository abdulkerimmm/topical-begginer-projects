import {SET_USERNAME,FETCH_DATA} from "../actionTypes/userActionTypes";


export const setUserName=(userName)=>{
    return {
        type:SET_USERNAME,
        payload:userName
    }
}

export const fetchData=()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json =>{
                console.log('Json',json)
                dispatch({
                    type:FETCH_DATA,
                    payload:json
                })
            })
    }
}