

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
    followed: undefined
}


let ApiUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_USER': {
            let StateCopy = {...state}
            StateCopy.followed = action.followed
            StateCopy.userId = action.userId
            StateCopy.fullName = action.fullName
            StateCopy.photos = {...action.photos}
            StateCopy.lookingForAJob=action.lookingForAJob
            return StateCopy
        }
        case 'GET_FOLLOWED_STATUS': {
            let StateCopy = {...state}
            StateCopy.followed = action.followed
            return StateCopy
        }
        case 'FOLLOW': {
            let StateCopy = {...state}
            StateCopy.followed = true
            return StateCopy
        }
        case 'UNFOLLOW': {
            let StateCopy = {...state}
            StateCopy.followed = false
            return StateCopy
        }
        case 'FETCHING_START': {
            let StateCopy = {...state}
            StateCopy.isFetching = true
            return StateCopy
        }
        case 'FETCHING_END': {
            let StateCopy = {...state}
            StateCopy.isFetching = false
            return StateCopy
        }
        case 'FETCHING_FOLLOW_START': {
            let StateCopy = {...state}
            StateCopy.isGettingFollowed = true
            return StateCopy
        }
        case 'FETCHING_FOLLOW_END': {
            let StateCopy = {...state}
            StateCopy.isGettingFollowed = false
            return StateCopy
        }
        default: {
            return state;
        }
    }
}
export let GetUser = (userId,fullName,photos,lookingForAJob, followed) => ({type: 'GET_USER', userId, fullName, photos, lookingForAJob, followed})
export let FetchingStart = () => ({type: 'FETCHING_START'})
export let FetchingEnd = () => ({type: 'FETCHING_END'})
export let FetchingFollowStart = () => ({type: 'FETCHING_FOLLOW_START'})
export let FetchingFollowEnd = () => ({type: 'FETCHING_FOLLOW_END'})
export let GetFollowedStatus = (followed) => ({type: 'GET_FOLLOWED_STATUS', followed})
export let Follow = () => ({type: 'FOLLOW'})
export let Unfollow = () => ({type: 'UNFOLLOW'})
export default ApiUserReducer