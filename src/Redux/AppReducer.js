import {GetAuthUserData} from "./AuthReducer";

const INITIALIZE = 'INITIALIZE'

let initialState = {
    initialized: false
}

let AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE: {
            return {...state, initialized: true}
        }
        default: {
            return state;
        }
    }
}
export let InitAC = () => {
    return {type: INITIALIZE}
}
export let InitializeApp = () => {
    return (dispatch) => {
        Promise.all([
            dispatch(GetAuthUserData())
        ]).then(() => {
            dispatch(InitAC())
        },()=>{
            console.error("Сервер social-network.samuraijs.com недоступен")
            dispatch(InitAC())
        })
    }
}
export default AppReducer