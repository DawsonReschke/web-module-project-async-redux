import axios from "axios"
import { REPLACE_CURRENT_FACT } from "./action-types"
/** Res format: {text:str,number:number,type:'math',found:bool} */
const MATH_API_URL = 'http://numbersapi.com/random/math?json'

export const fetchNewFact = () => dispatch => {
    axios.get(MATH_API_URL)
        .then(res=>{
            dispatch({type:REPLACE_CURRENT_FACT,payload:res.data})
        })
        .catch(e=>console.log(e))
}