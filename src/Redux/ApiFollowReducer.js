import {act} from "@testing-library/react";

let initialState = {
    userId: null,
    followed: false
}


let ApiFollowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FOLLOWED_STATUS': {
            let StateCopy = {...state}
            StateCopy.userId = action.userId
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
        default: {
            return state;
        }
    }
}
export let GetFollowedStatus = (userId,followed) => ({
    type: 'GET_FOLLOWED_STATUS',
    userId,
    followed
})
export let Follow = (userId) => ({type: 'FOLLOW', userId})
export let Unfollow = (userId) => ({type: 'UNFOLLOW', userId})
export default ApiFollowReducer