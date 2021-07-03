

const INTIAL_STATE = {
    isSignedIn : null,
    userId: null
};

const authReducer = (state = INTIAL_STATE ,action) => {
   switch(action.type){
       case 'SIGN_IN':
           return {...state,isSignedIn: true,userId: action.payload};
        case 'SIGN_OUT':
            return {...state,isSignedIn: false};
        default:
            return state;
   }
};

export default authReducer;