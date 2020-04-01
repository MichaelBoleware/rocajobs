import { SIGNINUSERNAME, SIGNOUT } from '../actions/authActions';

const usernameReducer = (state = {value: null}, action) => {
    switch (action.type) {
        case SIGNINUSERNAME:
            return {...state, value: action.payload};
        case SIGNOUT:
            return {...state, value: null};
        default:
            return {...state};
    }
};

export default usernameReducer;
