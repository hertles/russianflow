import {act} from "@testing-library/react";

let initialState = {
    list: [],
    page: 1,
    count: 9,
    totalCount: 0,
    totalPages: 0,
    isFetching: false
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
        default: {
            return state;
        }
    }
}
export let SetUsers = (list) => {
    return {type: 'API_LOAD_USERS', list: list}
}
export let SetTotalCount = (totalCount) => {
    return {type: 'API_SET_TOTAL_COUNT', totalCount: totalCount}
}

export let PagePlus = () => {
    return {type: 'PAGE_PLUS'}
}
export let PageMinus = () => {
    return {type: 'PAGE_MINUS'}
}
export let PageSet = (setNumber) => {
    return {type: 'PAGE_SET', setNumber: setNumber}
}
export let FetchingStart = () => {
    return {type: 'FETCHING_START'}
}
export let FetchingEnd = () => {
    return {type: 'FETCHING_END'}
}
export default ApiReducer