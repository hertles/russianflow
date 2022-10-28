import {AuthAxios} from "../Axios/Axios";
const CHANGE_LOGIN = "AUTH/CHANGE_LOGIN"
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH': {
            if (action.data.login == undefined) {
                return {...state, ...action.data, isAuth: false}
            }
            return {...state, ...action.data, isAuth: true}
        }
        case CHANGE_LOGIN: {
            return {...state, login: action.login}
        }
        default: {
            return state;
        }
    }
}
export let AuthAC = (userId, login, email) => {
    return {type: 'AUTH', data: {userId, login, email}}
}
export let ChangeLogin = (login) => {
    return {type: CHANGE_LOGIN, login}
}
export let GetAuthUserData = () => (dispatch) => {
    /*80*/
    return AuthAxios.GetAuthUserData().then(response => {
        dispatch(AuthAC(response.id, response.login, response.email))
    })
}
export let LoginToAPI = (email, password, rememberMe) => (dispatch) => {
    return AuthAxios.LoginToAPI(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(GetAuthUserData())
        }
    })
}
export let LogoutFromAPI = () => (dispatch) => {
    return AuthAxios.LogoutFromAPI().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(AuthAC(undefined, undefined, undefined))
        }
    })
}
export default AuthReducer