import React from 'react';
import ApiUser from '../ApiUser/ApiUser'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {GetUser, FetchingStart, FetchingEnd, GetFollowedStatus, Follow, Unfollow, FetchingFollowEnd, FetchingFollowStart} from "../../../Redux/ApiUserReducer";
import {compose} from "redux";


class ApiUserAxiosContainer extends React.Component {
    componentDidMount() {
        this.props.GetUser(this.props.match.params.userId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId != this.props.match.params.userId) {
            this.props.GetUser(this.props.match.params.userId)
        }
    }
    render() {
        return (
            <ApiUser {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        fullName: state.ApiUser.fullName,
        userId: state.ApiUser.userId,
        followed: state.ApiUser.followed,
        photos: state.ApiUser.photos,
        lookingForAJob: state.ApiUser.lookingForAJob,
        isFetching: state.ApiUser.isFetching,
        isGettingFollowed: state.ApiUser.isGettingFollowed
    }
}
let mapDispatchToProps = {
    GetUser,
    Follow,
    Unfollow,
    FetchingStart,
    FetchingEnd,
    GetFollowedStatus,
    FetchingFollowEnd,
    FetchingFollowStart
}
let ApiUserContainer = compose(connect(mapStateToProps, mapDispatchToProps),withRouter)(ApiUserAxiosContainer)
export default ApiUserContainer
