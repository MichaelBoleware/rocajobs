import { SIGNINUID, SIGNOUT } from '../actions/authActions';

const uidReducer = (state = {value: null}, action) => {
    switch (action.type) {
        case SIGNINUID:
            return {...state, value: action.payload};
        case SIGNOUT:
            return {...state, value: null};
        default:
            return {...state};
    }
};

export default uidReducer;
