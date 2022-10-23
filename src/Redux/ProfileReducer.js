import {ApiUserAxios} from "../Axios/Axios";

let GET_USER = 'PROFILE/GET_USER'
let GET_FOLLOWED_STATUS = 'PROFILE/GET_FOLLOWED_STATUS'
let FOLLOW = 'PROFILE/FOLLOW'
let UNFOLLOW = 'PROFILE/UNFOLLOW'
let FETCHING_START = 'PROFILE/FETCHING_START'
let FETCHING_END = 'PROFILE/FETCHING_END'
let FETCHING_FOLLOW_START = 'PROFILE/FETCHING_FOLLOW_START'
let FETCHING_FOLLOW_END = 'PROFILE/FETCHING_FOLLOW_END'
let SET_STATUS = 'PROFILE/SET_STATUS'

let initialState = {
    userId: undefined,
    fullName: undefined,
    lookingForAJob: undefined,
    photos: {
        small: undefined,
        large: undefined
    },
    isFetching: true,
    isGettingFollowed: false,
    followed: undefined,
    status: undefined
}


let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER: {
            let StateCopy = {...state}
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
export let GetUser = (userId, isAuth) => async (dispatch) => {
    dispatch(FetchingStart())
    if (isAuth) {
        let [userData, status] = await ApiUserAxios.GetUser(userId)
        dispatch(GetUserAC(userData.userId, userData.fullName, userData.photos, userData.lookingForAJob, status))
        let followed = await ApiUserAxios.GetFollowedStatus(userId)
        dispatch(GetFollowedStatus(followed))
        dispatch(FetchingEnd())
    } else {
        let [userData, status] = await ApiUserAxios.GetUser(userId)
        dispatch(GetUserAC(userData.userId, userData.fullName, userData.photos, userData.lookingForAJob, status))
        dispatch(FetchingEnd())
    }
}
export let Follow = (userId) => async (dispatch) => {
    dispatch(FetchingFollowStart())
    let response = await ApiUserAxios.Follow(userId)
    if (!response.data.resultCode) {
        dispatch(FollowAC())
    }
    dispatch(FetchingFollowEnd())

}
export let Unfollow = (userId) => async (dispatch) => {
    dispatch(FetchingFollowStart())
    let response = await ApiUserAxios.Unfollow(userId)
    if (!response.data.resultCode) {
        dispatch(UnfollowAC())
    }
    dispatch(FetchingFollowEnd())
}
export let SetStatus = (status) => async (dispatch) => {
    let response = await ApiUserAxios.SetStatus(status)
    if (response.resultCode === 0) {
        dispatch(SetStatusAC(status))
    }
}
export default ProfileReducer