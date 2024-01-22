import { DECREMENT,INCREMENT } from "../actionTypes/countType"

export const decrement=(b)=>{
    return  {
        type:DECREMENT,
        payload:b
       }
}

export const increment=(a)=>{
    return{
        type:INCREMENT,
        payload:a
    }
}