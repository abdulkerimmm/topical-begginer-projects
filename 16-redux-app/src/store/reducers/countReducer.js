
import { initialCount } from './../state/actionState';

import { DECREMENT, INCREMENT } from './../actionTypes/countType';


function countReducer(state = initialCount, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + action.payload }
        case DECREMENT:
            return { count: state.count - action.payload }

        default:
            return state
    }

}

export default countReducer