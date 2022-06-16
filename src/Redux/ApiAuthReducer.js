import {act} from "@testing-library/react";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


let ApiAuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'AUTH': {
            return {...state, ...action.data, isAuth: true}
        }
        default: {
            return state;
        }
    }
}
export let Auth = (userId, login, email) => {
    return {type: 'AUTH', data: {userId, login, email}}
}
export default ApiAuthReducer