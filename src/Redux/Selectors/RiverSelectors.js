import {createSelector} from "reselect";

let GetAllComments = state => {
    return state.River.allComments
}
export let GetRiverId = state => state.River.riverid
/*export let GetComments = state => {
    let comments = GetAllComments(state)
    return comments.filter(comment=>comment.riverid===state.River.riverid)
}*/
export let GetComments = createSelector(GetAllComments, GetRiverId, (allComments, riverid) => {
    return allComments.filter(comment => comment.riverid === riverid)
})