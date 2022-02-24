import Api from './Api'
import {connect} from 'react-redux'
import {ApiLoadUsersAC} from "../../../Redux/ApiReducer";
let mapStateToProps = (state) => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        SetUsers: (list) => dispatch(ApiLoadUsersAC(list))
    }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({},stateProps,dispatchProps,ownProps)
}
let ApiContainer = connect(mapStateToProps,mapDispatchToProps)(Api)
export default ApiContainer