import Api from './Api'
import {connect} from 'react-redux'
import {
    FetchingEnd,
    FetchingStart,
    SetUsers,
    PageMinus,
    PagePlus,
    PageSet,
    SetTotalCount,
    Follow,
    Unfollow,
    FetchingFollowEnd,
    FetchingFollowStart
} from "../../../Redux/ApiReducer";
import React from "react";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        list: state.Api.list,
        page: state.Api.page,
        count: state.Api.count,
        totalCount: state.Api.totalCount,
        totalPages: state.Api.totalPages,
        isFetching: state.Api.isFetching,
        isGettingFollowedUsers: state.Api.isGettingFollowedUsers
    }
}
let mapDispatchToProps = {
    FetchingEnd,
    FetchingStart,
    SetUsers,
    PageMinus,
    PagePlus,
    PageSet,
    SetTotalCount,
    Follow,
    Unfollow,
    FetchingFollowEnd,
    FetchingFollowStart
}

class ApiAxiosContainer extends React.Component {
    componentDidMount() {
        this.props.PageSet(this.props.match.params.page)
        this.props.FetchingStart()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`,{withCredentials:true}).then(response => {
            this.props.SetUsers(response.data.items)
            this.props.SetTotalCount(response.data.totalCount)
            this.props.FetchingEnd()
        })
    }

    PageMinus = () => {
        this.Axios(this.props.page - 1)
        this.props.PageSet(this.props.page - 1)
    }
    PagePlus = () => {
        this.Axios(this.props.page + 1)
        this.props.PageSet(this.props.page + 1)
    }
    PageSet = (settingNumber) => {
        this.Axios(settingNumber)
        this.props.PageSet(settingNumber)
    }
    Axios = (settingNumber) => {
        this.props.FetchingStart()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${settingNumber}`,{withCredentials:true}).then(data => {
            this.props.SetUsers(data.data.items);
            this.props.SetTotalCount(data.data.totalCount)
            this.props.FetchingEnd()
        })
    }

    render() {
        return <Api {...this.props} PageMinus={this.PageMinus} PagePlus={this.PagePlus} PageSet={this.PageSet}/>
    }
}
let WithApiContainer = withRouter(ApiAxiosContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithApiContainer)