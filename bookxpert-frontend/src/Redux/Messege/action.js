
import { useToast } from "@chakra-ui/react"
import axios from "axios"



const getMessegeData = (dispatch)=>{
    dispatch({type:"GET_DATA_LOADING_MESSEGE"})
    return axios.get(`https://ruby-tasty-crocodile.cyclic.app/mail`)
    .then((res)=> dispatch({type:"GET_DATA_SUCCESS_MESSEGE" , payload:res.data}))
    .catch((err)=> dispatch({type:"GET_DATA_ERROR_MESSEGE"}))
   
}

const sendMessegeData =(body)=> (dispatch)=>{
    dispatch({type:"SEND_MESSEGE"})
    return axios.post(`https://ruby-tasty-crocodile.cyclic.app/mail` , body)
    .then((res)=> useToast({ title: 'Messege Send.',
    description: "Your messege is send successfully",
    status: 'success',
    position:"top" ,
    duration: 3000,
    isClosable: true,}))
    .catch((err)=> console.log(err,"err"))
}



export {getMessegeData ,sendMessegeData}