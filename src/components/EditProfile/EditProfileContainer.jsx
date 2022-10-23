import EditProfile from './EditProfile'
import {connect} from 'react-redux'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {compose} from "redux";
import {GetUser, SetStatus} from "../../Redux/ProfileReducer";
import {LogoutFromAPI} from "../../Redux/AuthReducer";
import AuthRedirect from "../../hoc/AuthRedirect";
const EditProfileContainer = React.memo((props) => {
    const [saved,setSaved] = useState(false)
    let ApplyChanges = (values) => {
        if (values.status!==props.status){
            props.SetStatus(values.status)
        }
        setSaved(true)
        setTimeout(()=>{
            setSaved(false)
        },2000)
    }
    useLayoutEffect(() => {
        props.GetUser(props.userId)
    }, []);

    return(
        <EditProfile {...props} saved={saved} ApplyChanges={ApplyChanges}/>
    )
},(prevProps,nextProps)=>prevProps.userId===nextProps.userId && prevProps.isFetching===nextProps.isFetching)

let mapStateToProps = (state) => ({
    fullName: state.Profile.fullName,
    userId: state.Auth.userId,
    followed: state.Profile.followed,
    photos: state.Profile.photos,
    lookingForAJob: state.Profile.lookingForAJob,
    isFetching: state.Profile.isFetching,
    status: state.Profile.status,
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