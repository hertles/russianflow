import {ApiUserAxios} from "../Axios/Axios";

let GET_USER = 'GET_USER'
let GET_FOLLOWED_STATUS = 'GET_FOLLOWED_STATUS'
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let FETCHING_START = 'FETCHING_START'
let FETCHING_END = 'FETCHING_END'
let FETCHING_FOLLOW_START = 'FETCHING_FOLLOW_START'
let FETCHING_FOLLOW_END = 'FETCHING_FOLLOW_END'
let SET_STATUS = 'SET_STATUS'

let initialState = {
    userId: undefined,
    fullName: undefined,
    lookingForAJob: undefined,
    photos: {
        small: undefined,
        large: undefined
    },
    isFetching: false,
    isGettingFollowed: false,
    followed: undefined,
    status: undefined
}


let ApiUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER: {
            let StateCopy = {...state}
            StateCopy.followed = action.followed
            StateCopy.status = action.status
            StateCopy.userId = action.userId
            StateCopy.fullName = action.fullName
            StateCopy.photos = {...action.photos}
            StateCopy.lookingForAJob = action.lookingForAJob
            return StateCopy
        }
        case GET_FOLLOWED_STATUS: {
            let StateCopy = {...state}
            StateCopy.followed = action.followed
            return StateCopy
        }
        case FOLLOW: {
            let StateCopy = {...state}
            StateCopy.followed = true
            return StateCopy
        }
        case UNFOLLOW: {
            let StateCopy = {...state}
            StateCopy.followed = false
            return StateCopy
        }
        case FETCHING_START: {
            let StateCopy = {...state}
            StateCopy.isFetching = true
            return StateCopy
        }
        case FETCHING_END: {
            let StateCopy = {...state}
            StateCopy.isFetching = false
            return StateCopy
        }
        case FETCHING_FOLLOW_START: {
            let StateCopy = {...state}
            StateCopy.isGettingFollowed = true
            return StateCopy
        }
        case FETCHING_FOLLOW_END: {
            let StateCopy = {...state}
            StateCopy.isGettingFollowed = false
            return StateCopy
        }
        case SET_STATUS: {
            let StateCopy = {...state}
            StateCopy.status = action.status
            return StateCopy
        }
        default: {
            return state;
        }
    }
}
export let GetUserAC = (userId, fullName, photos, lookingForAJob, status, followed) => ({
    type: GET_USER,
    userId,
    fullName,
    photos,
    lookingForAJob,
    status,
    followed
})
export let FetchingStart = () => ({type: FETCHING_START})
export let FetchingEnd = () => ({type: FETCHING_END})
export let FetchingFollowStart = () => ({type: FETCHING_FOLLOW_START})
export let FetchingFollowEnd = () => ({type: FETCHING_FOLLOW_END})
export let GetFollowedStatus = (followed) => ({type: GET_FOLLOWED_STATUS, followed})
export let FollowAC = () => ({type: FOLLOW})
export let UnfollowAC = () => ({type: UNFOLLOW})
export let SetStatusAC = (status) => ({type: SET_STATUS, status})
export let GetUser = (userId) => {
    return (dispatch) => {
        dispatch(FetchingStart())
        ApiUserAxios.GetUser(userId).then(([userData, followed, status]) => {
                dispatch(GetUserAC(userData.userId, userData.fullName, userData.photos, userData.lookingForAJob, status, followed))
                dispatch(GetFollowedStatus(followed))
                dispatch(FetchingEnd())
            }
        )
    }
}
export let Follow = (userId) => {
    return (dispatch) => {
        dispatch(FetchingFollowStart())
        ApiUserAxios.Follow(userId).then(response => {
            if (!response.data.resultCode) {
                dispatch(FollowAC())
            }
            dispatch(FetchingFollowEnd())
        })
    }
}
export let Unfollow = (userId) => {
    return (dispatch) => {
        dispatch(FetchingFollowStart())
        ApiUserAxios.Unfollow(userId).then(response => {
            if (!response.data.resultCode) {
                dispatch(UnfollowAC())
            }
            dispatch(FetchingFollowEnd())
        })
    }
}
export let SetStatus = (status) => {
    return (dispatch) => {
        ApiUserAxios.SetStatus(status).then(response=>{
            if (response.resultCode===0){
                dispatch(SetStatusAC(status))
            }
        })
    }
}
export default ApiUserReducer