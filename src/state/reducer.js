import { combineReducers } from "redux";
import { REPLACE_CURRENT_FACT } from "./action-types";


function mathFact(state={},action){
    switch(action.type){
        case REPLACE_CURRENT_FACT:
            return action.payload
        default: return state
    }
}

export default combineReducers({mathFact})