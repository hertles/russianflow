import UsersList from './UsersList'
import {connect} from 'react-redux'
import {
    FetchingEnd,
    FetchingStart,
    SetUsers,
    PageSet,
    SetTotalCount,
    Follow,
    Unfollow,
    FetchingFollowEnd,
    FetchingFollowStart, LoadPage, SetSearchString
} from "../../Redux/UsersListReducer";
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {
    getCount, getIsFetching, getIsGettingFollowedUsers, getMyId,
    getPageSelector, getSearchString,
    getTotalCount, getTotalPages,
    getUsersList,
    getUsersListSelector
} from "../../Redux/Selectors/ApiSelectors";

let mapStateToProps = (state) => {
    return {
        list: getUsersListSelector(state),
        page: getPageSelector(state),
        count: getCount(state),
        totalCount: getTotalCount(state),
        totalPages: getTotalPages(state),
        isFetching: getIsFetching(state),
        isGettingFollowedUsers: getIsGettingFollowedUsers(state),
        searchString: getSearchString(state),
        myId: getMyId(state)
    }
}
let mapDispatchToProps = {
    FetchingEnd,
    FetchingStart,
    SetUsers,
    PageSet,
    SetTotalCount,
    Follow,
    Unfollow,
    FetchingFollowEnd,
    FetchingFollowStart,
    LoadPage,
    SetSearchString
}

class ApiAxiosContainer extends React.Component {
    PageMinus = () => {
        this.props.LoadPage(Number(this.props.match.params.page)-1,this.props.count, this.props.onlyFollowed, this.props.searchString)
    }
    PagePlus = () => {
        this.props.LoadPage(Number(this.props.match.params.page)+1,this.props.count, this.props.onlyFollowed, this.props.searchString)
    }
    PageSet = (settingNumber) => {
        this.props.LoadPage(settingNumber,this.props.count, this.props.onlyFollowed, this.props.searchString)
    }
    Search = (searchString) => {
        if (searchString===undefined)
            searchString=""
        this.props.SetSearchString(searchString)
    }
    render() {
        return <UsersList {...this.props} PageMinus={this.PageMinus} PagePlus={this.PagePlus} PageSet={this.PageSet} Search={this.Search}/>
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),withRouter)(ApiAxiosContainer)