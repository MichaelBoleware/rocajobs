import { SIGNINPHOTOURL, SIGNOUT } from '../actions/authActions';

const photourlReducer = (state = {value: null}, action) => {
    switch (action.type) {
        case SIGNINPHOTOURL:
            return {...state, value: action.payload};
        case SIGNOUT:
            return {...state, value: null};
        default:
            return {...state};
    }
};

export default photourlReducer;
