import Api from './Api'
import {connect} from 'react-redux'
import {
    FetchingEnd,
    FetchingStart,
    SetUsers,
    PageMinus,
    PagePlus,
    PageSet,
    SetTotalCount
} from "../../../Redux/ApiReducer";
import React, {Component} from "react";
import * as axios from "axios";

let mapStateToProps = (state) => {
    return {
        list: state.Api.list,
        page: state.Api.page,
        count: state.Api.count,
        totalCount: state.Api.totalCount,
        totalPages: state.Api.totalPages,
        isFetching: state.Api.isFetching
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        SetUsers: (list) => dispatch(ApiLoadUsersAC(list)),
        SetTotalCount: (totalCount) => dispatch(ApiSetTotalCountAC(totalCount)),
        PagePlus: () => dispatch(ApiPagePlusAC()),
        PageMinus: () => dispatch(ApiPageMinusAC()),
        PageSet: (setNumber) => dispatch(ApiPageSetAC(setNumber)),
        FetchingStart: () => dispatch(ApiFetchingStartAC()),
        FetchingEnd: () => dispatch(ApiFetchingEndAC()),

    }
}*/
let mapDispatchToProps = {
    FetchingEnd,
    FetchingStart,
    SetUsers,
    PageMinus,
    PagePlus,
    PageSet,
    SetTotalCount
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, stateProps, dispatchProps, ownProps)
}

class ApiAxiosContainer extends Component {
    componentDidMount() {
        console.log('mount')
        this.props.FetchingStart()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`).then(data => {
            this.props.SetUsers(data.data.items);
            this.props.SetTotalCount(data.data.totalCount)
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${settingNumber}`).then(data => {
            this.props.SetUsers(data.data.items);
            this.props.SetTotalCount(data.data.totalCount)
            this.props.FetchingEnd()
        })
    }

    render() {
        return <Api PageMinus={this.PageMinus} PagePlus={this.PagePlus} PageSet={this.PageSet}
                    totalPages={this.props.totalPages} page={this.props.page} list={this.props.list}
                    isFetching={this.props.isFetching} count={this.props.count}/>
    }
}

let ApiContainer = connect(mapStateToProps, mapDispatchToProps)(ApiAxiosContainer)
export default ApiContainer