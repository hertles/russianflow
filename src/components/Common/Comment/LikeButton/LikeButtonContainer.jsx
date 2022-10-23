import LikeButton from './LikeButton'
import {connect} from 'react-redux'
import {Dislike, Like} from "../../../../../../Redux/MainReducer";

let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => ({
    Like: (commentID, userID) => {
        dispatch(Like(commentID, userID))
    },
    Dislike: (commentID, userID) => {
        dispatch(Dislike(commentID, userID))
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