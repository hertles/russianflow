import {act} from "@testing-library/react";
import {ApiAuthAxios} from "../Axios/Axios";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


let ApiAuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'AUTH': {
            console.log(action)
            if (action.data.login == undefined) {
                return {...state, ...action.data, isAuth: false}
            }
            return {...state, ...action.data, isAuth: true}
        }
        default: {
            return state;
        }
    }
}
export let AuthAC = (userId, login, email) => {
    return {type: 'AUTH', data: {userId, login, email}}
}
export let Auth = () => {
    console.log("start")
    return (dispatch) => {

        ApiAuthAxios.Auth().then(response => {
            dispatch(AuthAC(response.id, response.login, response.email))

        })
    }
}
export default ApiAuthReducer