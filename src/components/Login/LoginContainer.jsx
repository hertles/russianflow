import Login from './Login'
import {connect} from 'react-redux'
import React from 'react'
import {compose} from "redux";
import {LoginToAPI} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
class LoginContainer extends React.Component{
    componentDidMount(){

    }
    render(){
        if (this.props.isAuth){
            return <Redirect to={"/edit-profile"}/>
        }
        return(
            <Login {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    userId: state.Auth.userId
})
let mapDispatchToProps = {
    LoginToAPI
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(LoginContainer)