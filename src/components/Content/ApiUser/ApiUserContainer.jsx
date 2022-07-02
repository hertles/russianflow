import React from 'react';
import ApiUser from './ApiUser'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {withRouter} from "react-router-dom";
import {GetUser, FetchingStart, FetchingEnd, GetFollowedStatus, Follow, Unfollow, FetchingFollowEnd, FetchingFollowStart} from "../../../Redux/ApiUserReducer";
import {ApiUserAxios} from "../../../Axios/Axios";


class ApiUserAxiosContainer extends React.Component {
    LoadUserFromServer(){
        this.props.FetchingStart()
        ApiUserAxios.GetUserAxios(this.props.match.params.userId).then(([userData,followed]) => {
                this.props.GetUser(userData.userId, userData.fullName, userData.photos, userData.lookingForAJob, followed)
                this.props.GetFollowedStatus(followed)
                this.props.FetchingEnd()

            }
        )
    }
    /*FollowThisUser(){
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.userId}`, {},{withCredentials: true, headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'}}).then(response => {
            if (!response.data.resultCode){
                this.props.Follow(this.props.userId).bind(this)
            }
        })
    }*/
    componentDidMount() {
        this.LoadUserFromServer()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId != this.props.match.params.userId) {
            this.LoadUserFromServer()
        }
    }

    render() {
        return (
            <ApiUser {...this.props} /*FollowThisUser={this.FollowThisUser}*//>
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
let WithApiUserContainer = withRouter(ApiUserAxiosContainer)
let ApiUserContainer = connect(mapStateToProps, mapDispatchToProps)(WithApiUserContainer)
export default ApiUserContainer
