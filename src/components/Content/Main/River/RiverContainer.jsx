import River from './River';
import {connect} from 'react-redux'
import Comment from "./Comment/Comment";
import React from "react";

let mapStateToProps = (state) => ({
    AllComments: [...state.Main.comments],
    AllUsers: [...state.User.list],
    currentUserId: state.User.currentUserId
})
let mapDispatchToProps = (dispatch) => {
    return {}
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    let Comments = []
    let likes = ownProps.store.getState().Main.likes
    let currentUserId = stateProps.currentUserId
    stateProps.AllComments.forEach(ThisComment => {
        if (ThisComment.riverid === ownProps.riverid) {
            let commentUsername = stateProps.AllUsers.find(Author => Author.userid == ThisComment.userid).username
            let likesCount = (likes.filter(ThisLike => (ThisLike.commentid == ThisComment.commentid))).length
            let mode = 0
            if (likes.find(ThisLike => (ThisLike.commentid == ThisComment.commentid && ThisLike.userid == currentUserId)) != undefined) {
                mode = 1
            }
            let date = ThisComment.date
            let timeZoneDifference = date.getHours() - date.getUTCHours()
            let dateString = `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}  ${("0" + (date.getHours() + timeZoneDifference)).slice(-2)}:${("0" + date.getUTCMinutes()).slice(-2)}`
            Comments.push(<Comment store={ownProps.store} username={commentUsername} message={ThisComment.comment}
                                   likesCount={likesCount} mode={mode} commentID={ThisComment.commentid}
                                   date={dateString}/>)
        }
    });
    let pureStateProps = {...stateProps}
    delete pureStateProps.AllComments
    delete pureStateProps.AllUsers
    return Object.assign({
        Comments: Comments,
        riverid: ownProps.riverid,
        userid: currentUserId
    }, ownProps, pureStateProps, dispatchProps)
}
let RiverContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(River)

export default RiverContainer;