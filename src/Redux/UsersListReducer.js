import {ApiUserAxios} from "../Axios/Axios";

const LOAD_USERS = "LOAD_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const PAGE_SET = "PAGE_SET"
const FETCHING_START = "FETCHING_START"
const FETCHING_END = "FETCHING_END"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const FETCHING_FOLLOW_START = "FETCHING_FOLLOW_START"
const FETCHING_FOLLOW_END = "FETCHING_FOLLOW_END"
const SET_SEARCH_STRING = "SET_SEARCH_STRING"
const SET_ONLY_FOLLOWED = "SET_ONLY_FOLLOWED"

let initialState = {
    list: [],
    page: 1,
    followedPage: 1,
    count: 9,
    totalCount: 0,
    totalPages: 0,
    onlyFollowed: false,
    isFetching: false,
    isGettingFollowedUsers: [],
    searchString: ""
}


let UsersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS: {
            let StateCopy = {...state, onlyFollowed: action.onlyFollowed, list: [...action.list]}
            return StateCopy;
        }
        case SET_TOTAL_COUNT: {
            let StateCopy = {...state}
            StateCopy.totalCount = action.totalCount
            StateCopy.totalPages = Math.ceil(action.totalCount / StateCopy.count)
            return StateCopy;
        }
        case PAGE_SET: {
            let StateCopy = {...state}
            if (!state.onlyFollowed) {
                if (StateCopy.page != action.setNumber) {
                    StateCopy.page = action.setNumber
                }
            } else {
                if (StateCopy.followedPage != action.setNumber) {
                    StateCopy.followedPage = action.setNumber
                }
            }
            return StateCopy;
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
        case FOLLOW: {
            return {
                ...state,
                list: state.list.map(user => {
                    if (user.id == action.userId) {
                        return {...user, followed: true}
                    }
                    return {...user}
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                list: state.list.map(user => {
                    if (user.id == action.userId) {
                        return {...user, followed: false}
                    }
                    return {...user}
                })
            }
        }
        case FETCHING_FOLLOW_START: {
            return {
                ...state,
                isGettingFollowedUsers: [...state.isGettingFollowedUsers, action.userId]
            }
        }
        case FETCHING_FOLLOW_END: {
            return {
                ...state,
                isGettingFollowedUsers: state.isGettingFollowedUsers.filter(userId => userId != action.userId)
            }
        }
        case SET_SEARCH_STRING: {
            return {
                ...state,
                searchString: action.searchString
            }
        }
        case SET_ONLY_FOLLOWED: {
            return {...state, onlyFollowed: action.onlyFollowed}
        }
        default: {
            return state;
        }
    }
}
export let FollowAC = (userId) => ({type: FOLLOW, userId})
export let UnfollowAC = (userId) => ({type: UNFOLLOW, userId})
export let SetUsers = (list, onlyFollowed) => ({type: LOAD_USERS, list, onlyFollowed})
export let SetTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export let PageSet = (setNumber, onlyFollowed) => ({type: PAGE_SET, setNumber, onlyFollowed})
export let FetchingStart = () => ({type: FETCHING_START})
export let FetchingEnd = () => ({type: FETCHING_END})
export let FetchingFollowStart = (userId) => ({type: FETCHING_FOLLOW_START, userId})
export let FetchingFollowEnd = (userId) => ({type: FETCHING_FOLLOW_END, userId})
export let SetSearchString = (searchString) => ({type: SET_SEARCH_STRING, searchString})
export let SetOnlyFollowed = (onlyFollowed) => ({type: SET_ONLY_FOLLOWED, onlyFollowed})
export let LoadPage = (pageNumber, pageCount, onlyFollowed, searchString) => async (dispatch) => {
    await dispatch(SetOnlyFollowed(onlyFollowed))
    await dispatch(PageSet(pageNumber, onlyFollowed))
    dispatch(FetchingStart())
    let data = await ApiUserAxios.GetUsers(pageCount, pageNumber, onlyFollowed, searchString)
    dispatch(SetUsers(data.items, onlyFollowed))
    dispatch(SetTotalCount(data.totalCount))
    dispatch(FetchingEnd())
}
export const Follow = (userId) => async (dispatch) => {
    dispatch(FetchingFollowStart(userId))
    let response = await ApiUserAxios.Follow(userId)
    if (!response.data.resultCode) {
        dispatch(FollowAC(userId))
    }
    dispatch(FetchingFollowEnd(userId))
}
export const Unfollow = (userId) => async (dispatch) => {
    dispatch(FetchingFollowStart(userId))
    let response = await ApiUserAxios.Unfollow(userId)
    if (!response.data.resultCode) {
        dispatch(UnfollowAC(userId))
    }
    dispatch(FetchingFollowEnd(userId))
}
export default UsersListReducer