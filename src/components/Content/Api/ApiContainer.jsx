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
    FetchingFollowStart, LoadPage
} from "../../../Redux/ApiReducer";
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

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
    FetchingFollowStart,
    LoadPage
}

class ApiAxiosContainer extends React.Component {
    componentDidMount() {
        this.props.LoadPage(Number(this.props.match.params.page),this.props.count)
    }
    PageMinus = () => {
        this.props.LoadPage(Number(this.props.match.params.page)-1,this.props.count)
    }
    PagePlus = () => {
        this.props.LoadPage(Number(this.props.match.params.page)+1,this.props.count)
    }
    PageSet = (settingNumber) => {
        this.props.LoadPage(settingNumber,this.props.count)
    }

    render() {
        return <Api {...this.props} PageMinus={this.PageMinus} PagePlus={this.PagePlus} PageSet={this.PageSet}/>
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),withRouter)(ApiAxiosContainer)