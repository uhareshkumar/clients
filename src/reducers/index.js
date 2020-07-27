import {combineReducers} from 'redux';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    name: null,
    emailId: null,
    imageUrl: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':{
            const { userId, name, emailId, imageUrl } = action.payload;
            return ({ isSignedIn: true, userId, name, emailId, imageUrl });
        }   
        case 'SIGN_OUT':
            return ({...INITIAL_STATE, isSignedIn: false});
        default:
            return state;
    }
}



export default combineReducers({
    auth: authReducer
});