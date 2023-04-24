
const initialState = {
    loading : false , 
     userData:[] ,
    isError: false , 

    isSignIn :false  , 
    isSignInError :false  , 

    isLogin:false ,
    loginError :false , 
}

const ReducerAuth = (oldstate=initialState , action)=>{

    switch(action.type){

        case "GET_DATA_LOADING_AUTH":
         return  {...oldstate , loading:true }
        
         case "GET_DATA_SUCCESS_AUTH":
         return {...oldstate , userData:action.payload , loading:false}

         case "GET_DATA_ERROR_AUTH":
            return{...oldstate , isError:true , loading:false}

        case "SEND_DATA_SUCCESS":
          return {...oldstate , isSignIn:true } 

        case "SEND_DATA_ERROR":
          return {...oldstate , isSignInError:true }

      
        case "LOGIN_DATA_SUCCESS":
            return {...oldstate , isLogin:true } 
  
        case "LOGIN_DATA_FAILURE":
            return {...oldstate , loginError:true }
          
        default:
            return oldstate
        }
}

export {ReducerAuth}