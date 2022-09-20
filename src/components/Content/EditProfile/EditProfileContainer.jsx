import EditProfile from './EditProfile'
import {connect} from 'react-redux'
import React from 'react'
import {compose} from "redux";
import {GetUser, SetStatus} from "../../../Redux/ApiUserReducer";
import {LogoutFromAPI} from "../../../Redux/ApiAuthReducer";
import AuthRedirect from "../../../hoc/AuthRedirect";
class EditProfileContainer extends React.Component{
    state = {
        saved: false
    }
    ApplyChanges = (values) => {
        if (values.status!==this.props.status){
            this.props.SetStatus(values.status)
        }
        this.setState({
            saved: true
        })
        setTimeout(()=>{
            this.setState({
                saved: false
            })
        },2000)
    }
    componentDidMount(){
        this.props.GetUser(this.props.userId)
    }
    render(){
        return(
            <EditProfile {...this.props} saved={this.state.saved} ApplyChanges={this.ApplyChanges}/>
        )
    }
}


let mapStateToProps = (state) => ({
    fullName: state.ApiUser.fullName,
    userId: state.ApiAuth.userId,
    followed: state.ApiUser.followed,
    photos: state.ApiUser.photos,
    lookingForAJob: state.ApiUser.lookingForAJob,
    isFetching: state.ApiUser.isFetching,
    isGettingFollowed: state.ApiUser.isGettingFollowed,
    status: state.ApiUser.status,
})
let mapDispatchToProps = {
    GetUser,
    SetStatus,
    LogoutFromAPI
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    AuthRedirect
)(EditProfileContainer)