import React from 'react';
import ApiUser from './ApiUser'
import {connect} from 'react-redux'
import * as axios from 'axios'


class ApiUserAxiosContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({},stateProps,dispatchProps,ownProps)
}
let ApiUserContainer = connect(mapStateToProps,mapDispatchToProps, mergeProps)(ApiUserAxiosContainer)
export default ApiUserContainer
