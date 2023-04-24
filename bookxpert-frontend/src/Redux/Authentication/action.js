
import axios from "axios"



const getUserData = (dispatch)=>{
    dispatch({type:"GET_DATA_LOADING_AUTH"})
    return axios.get(``)
    .then((res)=> dispatch({type:"GET_DATA_SUCCESS_AUTH" , payload:res.data}))
    .catch((err)=> dispatch({type:"GET_DATA_ERROR_AUTH"}))
   
}



export {getUserData }