import {DECREMENT, INCREMENT} from "../actionTypes/counterActionTypes";


export const incrementNumber=(number)=>{
    return {
        type:INCREMENT,
        payload:number
    }
}

export const decrementNumber=(number)=>{
    return {
        type:DECREMENT,
        payload:number
    }
}