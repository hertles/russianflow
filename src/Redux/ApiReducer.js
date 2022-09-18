import {act} from "@testing-library/react";
import {ApiUserAxios} from "../Axios/Axios";

let initialState = {
    list: [],
    page: 1,
    count: 10,
    totalCount: 0,
    totalPages: 0,
    isFetching: false,
    isGettingFollowedUsers: []
}


let ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'API_LOAD_USERS': {
            let StateCopy = {...state, list: [...action.list]}
            return StateCopy;
        }
        case 'API_SET_TOTAL_COUNT': {
            let StateCopy = {...state}
            StateCopy.totalCount = action.totalCount
            StateCopy.totalPages = Math.ceil(action.totalCount / StateCopy.count)
            return StateCopy;
        }
        case 'PAGE_PLUS': {
            let StateCopy = {...state}
            if (StateCopy.page != StateCopy.totalPages)
                StateCopy.page = state.page + 1
            return StateCopy;
        }
        case 'PAGE_MINUS': {
            let StateCopy = {...state}
            if (StateCopy.page != 1)
                StateCopy.page = state.page - 1
            return StateCopy;
        }
        case 'PAGE_SET': {
            let StateCopy = {...state}
            if (StateCopy.page != action.setNumber)
                StateCopy.page = action.setNumber
            return StateCopy;
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
        case 'FOLLOW': {
            return {
                ...state,
                list: state.list.map(user=>{
                    if (user.id==action.userId){
                        return {...user, followed:true}
                    }
                    return {...user}
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                list: state.list.map(user=>{
                    if (user.id==action.userId){
                        return {...user, followed:false}
                    }
                    return {...user}
                })
            }
        }
        case 'FETCHING_FOLLOW_START': {
            return {
                ...state,
                isGettingFollowedUsers: [...state.isGettingFollowedUsers, action.userId]
            }
        }
        case 'FETCHING_FOLLOW_END': {

            return {
                ...state,
                isGettingFollowedUsers: state.isGettingFollowedUsers.filter(userId=>userId!=action.userId)
            }
        }
        default: {
            return state;
        }
    }
}
export let FollowAC = (userId) => ({type: 'FOLLOW', userId})
export let UnfollowAC = (userId) => ({type: 'UNFOLLOW', userId})
export let SetUsers = (list) => ({type: 'API_LOAD_USERS', list: list})
export let SetTotalCount = (totalCount) => ({type: 'API_SET_TOTAL_COUNT', totalCount: totalCount})
export let PagePlus = () => ({type: 'PAGE_PLUS'})
export let PageMinus = () => ({type: 'PAGE_MINUS'})
export let PageSet = (setNumber) => ({type: 'PAGE_SET', setNumber: setNumber})
export let FetchingStart = () => ({type: 'FETCHING_START'})
export let FetchingEnd = () => ({type: "FETCHING_END"})
export let FetchingFollowStart = (userId) => ({type: 'FETCHING_FOLLOW_START', userId})
export let FetchingFollowEnd = (userId) => ({type: "FETCHING_FOLLOW_END", userId})
export let LoadPage = (pageNumber, pageCount) =>{
    return (dispatch) => {
        dispatch(PageSet(pageNumber))
        dispatch(FetchingStart())
        ApiUserAxios.GetUsers(pageCount, pageNumber).then(data => {
            dispatch(SetUsers(data.items))
            dispatch(SetTotalCount(data.totalCount))
            dispatch(FetchingEnd())
        })
    }
}
export const Follow = (userId) => {
    return (dispatch) => {
        dispatch(FetchingFollowStart(userId))
            ApiUserAxios.Follow(userId)
                .then(response => {
                    if (!response.data.resultCode) {
                        dispatch(FollowAC(userId))
                    }
                    dispatch(FetchingFollowEnd(userId))
                })
    }
}
export const Unfollow = (userId) => {
    return (dispatch) => {
        dispatch(FetchingFollowStart(userId))
        ApiUserAxios.Unfollow(userId)
            .then(response => {
                if (!response.data.resultCode) {
                    dispatch(UnfollowAC(userId))
                }
                dispatch(FetchingFollowEnd(userId))
            })
    }
}
export default ApiReducer