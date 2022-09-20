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
    return (dispatch) => {
        ApiAuthAxios.Auth().then(response => {
            dispatch(AuthAC(response.id, response.login, response.email))
        })
    }
}
export let LoginToAPI = (email,password,rememberMe) => {
    return (dispatch) => {

        ApiAuthAxios.LoginToAPI(email,password,rememberMe).then(response => {
            console.log(response)
            if (response.data.resultCode===0){
                dispatch(Auth())
            }
            //dispatch(AuthAC(response.id, response.login, response.email))
        })
    }
}
export let LogoutFromAPI = () => {
    return (dispatch) => {
        ApiAuthAxios.LogoutFromAPI().then(response => {
            if (response.data.resultCode===0){
                dispatch(AuthAC(undefined,undefined,undefined))
            }
            //dispatch(AuthAC(response.id, response.login, response.email))
        })
    }
}
export default ApiAuthReducer