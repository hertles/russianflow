import Nav from './Nav'
import {connect} from 'react-redux'
import React from 'react'
import ApiReducer from "../../Redux/ApiReducer";
class NavAxiosContainer extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <Nav {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        page: state.Api.page
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({},stateProps,dispatchProps,ownProps)
}
let NavContainer = connect(mapStateToProps,mapDispatchToProps, mergeProps)(NavAxiosContainer)
export default NavContainer