
const initialState = {
    loading : false , 
     userMessege:[] ,
    isError: false , 
 
}

const ReducerMessege = (oldstate=initialState , action)=>{

    switch(action.type){

        case "GET_DATA_LOADING_MESSEGE":
         return  {...oldstate , loading:true }
        
         case "GET_DATA_SUCCESS_MESSEGE":
         return {...oldstate , userMessege:action.payload , loading:false}

         case "GET_DATA_ERROR_MESSEGE":
            return{...oldstate , isError:true , loading:false}

          
        default:
            return oldstate
        }
}

export {ReducerMessege}