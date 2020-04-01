import { SIGNINEMAIL, SIGNOUT } from '../actions/authActions';

const emailReducer = (state = {value: null}, action) => {
    switch (action.type) {
        case SIGNINEMAIL:
            console.log(action.payload);
            return {...state, value: action.payload};
        case SIGNOUT:
            return {...state, value: null};
        default:
            return {...state};
    }
};

export default emailReducer;
