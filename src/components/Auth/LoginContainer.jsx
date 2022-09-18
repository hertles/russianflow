import Login from './Login'
import {connect} from 'react-redux'
import React from 'react'
import {Auth} from "../../Redux/ApiAuthReducer";
import {compose} from "redux";
class LoginContainer extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <Login {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({

})
let mapDispatchToProps = {
    Auth
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(LoginContainer)