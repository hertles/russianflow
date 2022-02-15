import LikeButton from './LikeButton'
import {connect} from 'react-redux'
import {DislikeActionCreator, LikeActionCreator} from "../../../../../../Redux/MainReducer";

let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => ({
    Like: (commentID, userID) => {
        dispatch(LikeActionCreator(commentID, userID))
    },
    Dislike: (commentID, userID) => {
        dispatch(DislikeActionCreator(commentID, userID))
    }
})
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    let newOwnProps = {...ownProps}
    delete newOwnProps.store
    return Object.assign({

    }, stateProps, dispatchProps,newOwnProps)
}
let LikeButtonContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LikeButton)
export default LikeButtonContainer