import {createSelector} from 'reselect'
import UsersListReducer from "../UsersListReducer";

let getUsersList = state => {
    return state.UsersList.list
}
let getOnlyFollowedStatus = state => {
    return state.UsersList.onlyFollowed
}
let getFollowedPage = state => {
    return state.UsersList.followedPage
}
let getPage = state => {
    return state.UsersList.page
}
export let getTotalCount = state => {
    return state.UsersList.totalCount
}
export let getTotalPages = state => {
    return state.UsersList.totalPages
}
export let getCount = state => {
    return state.UsersList.count
}
export let getIsFetching = state => {
    return state.UsersList.isFetching
}
export let getIsGettingFollowedUsers = state => {
    return state.UsersList.isGettingFollowedUsers
}
export let getSearchString = state => {
    return state.UsersList.searchString
}
export let getMyId = state => {
    return state.Auth.userId
}
export let getUsersListSelector = createSelector(getUsersList, users => users.filter(u=>true))
export let getPageSelector = state => {
    return getOnlyFollowedStatus(state) ? getFollowedPage(state) : getPage(state)
}