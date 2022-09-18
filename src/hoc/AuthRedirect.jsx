import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
let mapStateToProps=(state)=>({
    isAuth: state.ApiAuth.isAuth
})
let AuthRedirect = (Component) =>{
    let RedirectContainer = (props) =>{
        if (!props.isAuth){
            return <Redirect to={'login'}/>
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectContainer)
}
export default AuthRedirect