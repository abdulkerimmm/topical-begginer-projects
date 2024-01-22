
import { FETCH_DATA } from '../actionTypes/userType';
import { initialUser } from './../state/userState';
import { SET_USERNAME } from '../actionTypes/userType';


function userReducer(state = initialUser, action) {
    switch (action.type) {
        case SET_USERNAME:
            return {user:action.payload}
        case FETCH_DATA:
            return{
                ...state,
                userData:action.payload          
            }     
            default:
                return state
    }
}

export default userReducer