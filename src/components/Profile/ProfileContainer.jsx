import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {GetUser, FetchingStart, FetchingEnd, GetFollowedStatus, Follow, Unfollow, FetchingFollowEnd, FetchingFollowStart} from "../../Redux/ProfileReducer";
import {compose} from "redux";
import {LogoutFromAPI} from "../../Redux/AuthReducer";


class ApiUserAxiosContainer extends React.Component {
    componentDidMount() {
        this.props.GetUser(this.props.match.params.userId, this.props.isAuth)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profile && prevProps.profile.userId != this.props.match.params.userId) {
            this.props.GetUser(this.props.match.params.userId, this.props.isAuth)
        }
    }
    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.Profile.profile,
        isFetching: state.Profile.isFetching,
        isGettingFollowed: state.Profile.isGettingFollowed,
        myId: state.Auth.userId,
        isAuth: state.Auth.isAuth
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
    FetchingFollowStart,
    LogoutFromAPI
}
let ProfileContainer = compose(connect(mapStateToProps, mapDispatchToProps),withRouter)(ApiUserAxiosContainer)
export default ProfileContainer
