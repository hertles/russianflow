import Profile from './Profile'
import {connect} from 'react-redux'
let mapStateToProps = (state) => ({
    username: state.User.list.find(user=>user.userid==state.User.currentUserId).username,
    isAuthorized: state.User.isAuthorized
})
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    
}
let ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)
export default ProfileContainer