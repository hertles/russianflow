import {AuthAxios} from "../Axios/Axios";

const CHANGE_LOGIN = "AUTH/CHANGE_LOGIN"
const SET_CAPTCHA = 'AUTH/SET_CAPTCHA'
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
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
        case SET_CAPTCHA: {
            return {...state, captchaUrl: action.captchaUrl}
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
let SetCaptcha = (captchaUrl) => {
    return {type: SET_CAPTCHA, captchaUrl}
}
export let GetCaptcha = () => async dispatch => {
    const response = await AuthAxios.GetCaptcha()
    dispatch(SetCaptcha(response))
}
export let GetAuthUserData = () => (dispatch) => {
    /*80*/
    return AuthAxios.GetAuthUserData().then(response => {
        dispatch(AuthAC(response.id, response.login, response.email))
    })
}
export let LoginToAPI = (email, password, rememberMe, captcha) => (dispatch,getState) => {
    return AuthAxios.LoginToAPI(email, password, rememberMe, captcha).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(GetAuthUserData())
            dispatch(SetCaptcha(null))
            return undefined
        }
        else {
            if (response.data.resultCode===10 || getState().Auth.captchaUrl!==null)
                dispatch(GetCaptcha())
            return response.data.messages[0]
        }
    })
}
export let LogoutFromAPI = () => async (dispatch) => {
    const response = await AuthAxios.LogoutFromAPI()
    if (response.data.resultCode === 0) {
        dispatch(AuthAC(undefined, undefined, undefined))
    }
}
export default AuthReducer