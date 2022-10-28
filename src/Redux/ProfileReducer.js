import {ApiUserAxios} from "../Axios/Axios";

const GET_USER = 'PROFILE/GET_USER'
const GET_FOLLOWED_STATUS = 'PROFILE/GET_FOLLOWED_STATUS'
const FOLLOW = 'PROFILE/FOLLOW'
const UNFOLLOW = 'PROFILE/UNFOLLOW'
const FETCHING_START = 'PROFILE/FETCHING_START'
const FETCHING_END = 'PROFILE/FETCHING_END'
const FETCHING_FOLLOW_START = 'PROFILE/FETCHING_FOLLOW_START'
const FETCHING_FOLLOW_END = 'PROFILE/FETCHING_FOLLOW_END'
const SET_STATUS = 'PROFILE/SET_STATUS'
const SET_PHOTO = 'PROFILE/SET_PHOTO'
const SET_PROFILE='PROFILE/SET_PROFILE'

let initialState = {
    isFetching: true,
    isGettingFollowed: false,
    profile: null
}


let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER: {
            return {...state, profile: {...action.profile,contacts: {...action.profile.contacts}}}
        }
        case GET_FOLLOWED_STATUS: {
            let StateCopy = {...state}
            StateCopy.profile.followed = action.followed
            return StateCopy
        }
        case FOLLOW: {
            let StateCopy = {...state}
            StateCopy.profile.followed = true
            return StateCopy
        }
        case UNFOLLOW: {
            let StateCopy = {...state}
            StateCopy.profile.followed = false
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
            StateCopy.profile.status = action.status
            return StateCopy
        }
        case SET_PHOTO: {
            return {...state, profile:{...state.profile, photos: {large: action.large, small: action.small}}}
        }
        default: {
            return state;
        }
    }
}
export let GetUserAC = (profile) => ({
    type: GET_USER,
    profile
})
export let FetchingStart = () => ({type: FETCHING_START})
export let FetchingEnd = () => ({type: FETCHING_END})
export let FetchingFollowStart = () => ({type: FETCHING_FOLLOW_START})
export let FetchingFollowEnd = () => ({type: FETCHING_FOLLOW_END})
export let GetFollowedStatus = (followed) => ({type: GET_FOLLOWED_STATUS, followed})
export let FollowAC = () => ({type: FOLLOW})
export let UnfollowAC = () => ({type: UNFOLLOW})
export let SetStatusAC = (status) => ({type: SET_STATUS, status})
let SetPhotoAC = (large,small) => ({type: SET_PHOTO, large, small})
export let GetUser = (userId) => async (dispatch) => {
    dispatch(FetchingStart())
    if (userId) {
        let [userData, status] = await ApiUserAxios.GetUser(userId)
        dispatch(GetUserAC({...userData, status}))
        let followed = await ApiUserAxios.GetFollowedStatus(userId)
        dispatch(GetFollowedStatus(followed))
        dispatch(FetchingEnd())
    } else {
        let [userData, status] = await ApiUserAxios.GetUser(userId)
        dispatch(GetUserAC({...userData, status}))
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
export let SetPhoto = photo => async dispatch => {
    let response = await ApiUserAxios.SetPhoto(photo)
    if (response.resultCode === 0) {
        dispatch(SetPhotoAC(response.data.large,response.data.small))
    }
}
export let SetProfile = newProfileData => async (dispatch,getState) => {
    await ApiUserAxios.SetProfile(newProfileData)
    const [userData, status] = await ApiUserAxios.GetUser(getState().Auth.userId)
    dispatch(GetUserAC({...userData, status}))
}
export default ProfileReducer