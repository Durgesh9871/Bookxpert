
import axios from "axios"

const sendUserData = (body)=>(dispatch)=>{
 dispatch({type:"SEND_DATA_LOADING"})
 return axios.post(`` , body)
 .then((res)=> dispatch({type:"SEND_DATA_SUCCESS"}) )
 .catch((err)=> dispatch({type:"SEND_DATA_ERROR"}))


}

const getUserData = (dispatch)=>{
    dispatch({type:"GET_DATA_LOADING_AUTH"})
    return axios.get(``)
    .then((res)=> dispatch({type:"GET_DATA_SUCCESS_AUTH" , payload:res.data}))
    .catch((err)=> dispatch({type:"GET_DATA_ERROR_AUTH"}))
   
}



export {sendUserData ,getUserData }