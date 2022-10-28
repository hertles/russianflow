import EditProfile from './EditProfile'
import {connect} from 'react-redux'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {compose} from "redux";
import {GetUser, SetStatus, SetPhoto, SetProfile} from "../../Redux/ProfileReducer";
import {ChangeLogin, LogoutFromAPI} from "../../Redux/AuthReducer";
import AuthRedirect from "../../utils/hoc/AuthRedirect";

const EditProfileContainer = React.memo((props) => {
    const [saved, setSaved] = useState(false)
    let ApplyChanges = (values) => {
        if (values.status !== props.status) {
            props.SetStatus(values.status)
        }
        if (values.photo) {
            let photo = [...values.photo][0]
            props.SetPhoto(photo)
        }
        if (props.profile.fullName!==values.fullName){
            props.ChangeLogin(values.fullName)
        }
        let newProfileData = {
            userId: props.userId,
            lookingForAJob: values.lookingForAJob,
            aboutMe: values.aboutMe,
            lookingForAJobDescription: values.lookingForAJobDescription,
            fullName: values.fullName,
            contacts: {
                github: values.github,
                vk: values.vk,
                facebook: values.facebook,
                instagram: values.instagram,
                twitter: values.twitter,
                youtube: values.youtube,
                mainLink: values.mainLink,
                website: values.website
            }
        }
        props.SetProfile(newProfileData)
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
    }
    useLayoutEffect(() => {
        props.GetUser(props.userId)
    }, [props.userId]);

    return (
        <EditProfile {...props} saved={saved} ApplyChanges={ApplyChanges}/>
    )
}, (prevProps, nextProps) => prevProps.userId === nextProps.userId && prevProps.isFetching === nextProps.isFetching)

let mapStateToProps = (state) => ({
    profile: state.Profile.profile,
    userId: state.Auth.userId,
    isFetching: state.Profile.isFetching,
    isGettingFollowed: state.Profile.isGettingFollowed
})
let mapDispatchToProps = {
    GetUser,
    SetStatus,
    SetPhoto,
    LogoutFromAPI,
    SetProfile,
    ChangeLogin
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(EditProfileContainer)