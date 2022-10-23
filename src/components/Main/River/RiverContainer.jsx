import River from './River';
import {connect} from 'react-redux'
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {GetComments, GetRiverId} from "../../../Redux/Selectors/RiverSelectors";
import {SetComments, SetRiverId, AddComment} from "../../../Redux/RiverReducer";

let mapStateToProps = (state) => ({
    userId: state.Auth.userId,
    likes: state.River.likes,
    comments: GetComments(state),
    riverid: GetRiverId(state)
})
let mapDispatchToProps = {
    SetRiverId,
    SetComments,
    AddComment,
}

let RiverContainer = props => {
    let AddComment = (text) => {
        props.AddComment(props.userId,text)
    }
    return <River {...props} AddComment={AddComment}/>
}
/*const mergeProps = (stateProps, dispatchProps, ownProps) => {
    let Comments = []
    stateProps.AllComments.forEach(ThisComment => {
        if (ThisComment.riverid == ownProps.match.params.riverid) {
            let commentUsername = stateProps.AllUsers.find(Author => Author.userid === ThisComment.userid).username
            let likesCount = (this.props.likes.filter(ThisLike => (ThisLike.commentid === ThisComment.commentid))).length
            let liked = this.props.likes.find(ThisLike => (ThisLike.commentid === ThisComment.commentid && ThisLike.userid === stateProps.userId))

            let date = ThisComment.date
            let timeZoneDifference = date.getHours() - date.getUTCHours()
            let dateString = `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}  ${("0" + (date.getHours() + timeZoneDifference)).slice(-2)}:${("0" + date.getUTCMinutes()).slice(-2)}`
            Comments.push(<Comment store={ownProps.store} username={commentUsername} message={ThisComment.comment}
                                   likesCount={likesCount} liked={liked} commentID={ThisComment.commentid}
                                   date={dateString}/>)
        }
    });
    let pureStateProps = {...stateProps}
    delete pureStateProps.AllComments
    delete pureStateProps.AllUsers
    return Object.assign({
        Comments: Comments,
        riverid: ownProps.match.params.riverid,
        userid: stateProps.userId
    }, ownProps, pureStateProps, dispatchProps)
    return Object.assign({},
        stateProps,
        dispatchProps,
        ownProps)
}*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)(RiverContainer)
