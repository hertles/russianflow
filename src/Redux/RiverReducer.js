import {ApiUserAxios} from "../Axios/Axios";

const SET_RIVER_ID = 'RIVER/SET_RIVER_ID'
const SET_COMMENT = 'RIVER/SET_COMMENT'
const ADD_COMMENT = 'RIVER/ADD_COMMENT'
let DISLIKE = 'RIVER/DISLIKE'
let LIKE = 'RIVER/LIKE'
let initialState = {
    riverid: null,
    isFetching: true,
    allComments: [
        {
            fullName: undefined,
            commentid: 0,
            riverid: 1,
            userId: 22470,
            comment: 'Я попал в круг ещё два года назад, пытался пройти через лес - выходил к реке, пытался плыть против течения - река потекла в другую сторону. Что мне делать?',
            date: new Date(2022, 1, 27, 13, 23),
            LikedUsersIDs: [1, 2]
        },
        {
            fullName: undefined,
            commentid: 1,
            riverid: 1,
            userId: 6887,
            comment: 'Включи Михаила Круга.',
            date: new Date(2022, 1, 27, 15, 2),
            LikedUsersIDs: []
        },
        {
            fullName: undefined,
            commentid: 2,
            riverid: 1,
            userId: 22470,
            comment: 'Спасибо, сработало!',
            date: new Date(2022, 1, 27, 15, 5),
            LikedUsersIDs: []
        },
        {
            fullName: undefined,
            commentid: 3,
            riverid: 0,
            userId: 22470,
            comment: 'Оставили в ящике рецепт оладий.',
            date: new Date(2022, 7, 28, 17, 20),
            LikedUsersIDs: [12,13,14]
        },
    ],
    comments: [],
    likes: [
        {commentid: 0, userId: 1},
        {commentid: 1, userId: 2},
        {commentid: 1, userId: 0},
        {commentid: 1, userId: 1},
    ],
    newCommentText: '',
}
const RiverReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_RIVER_ID: {
            return {...state, riverid: action.riverid}
        }
        case ADD_COMMENT: {
            return {
                ...state, allComments: [...state.allComments,
                    {
                        fullName: undefined,
                        commentid: state.allComments.length,
                        riverid: state.riverid,
                        userId: action.userId,
                        comment: action.text,
                        date: new Date(),
                        LikedUsersIDs: []
                    }]
            }
        }
        case LIKE : {
            let StateCopy = {
                ...state,
                likes: [...state.likes]
            }
            StateCopy.likes.push({commentid: action.commentID, userid: action.userID})
            return StateCopy;
        }
        case DISLIKE : {
            let StateCopy = {
                ...state,
                likes: state.likes.map(like => like)
            }
            for (let i = 0; i < StateCopy.likes.length; i++) {
                if (StateCopy.likes[i].userId === action.userID && StateCopy.likes[i].commentid === action.commentID) {
                    StateCopy.likes.splice(i, 1)
                }
            }
            return StateCopy;
        }
        case SET_COMMENT: {
            let allCommentsNew = [...state.allComments]
            allCommentsNew.find(comment => comment.commentid === action.commentid).fullName = action.username
            return {
                ...state, allComments: allCommentsNew
            }
        }
        default:
            return state;
    }
}
export let AddComment = (userId, text) => ({
    type: ADD_COMMENT, userId, text
})
export let Like = (commentID, userID) => ({
    type: LIKE, commentID, userID
})
export let Dislike = (commentID, userID) => ({
    type: DISLIKE, commentID, userID
})
export let SetRiverId = (riverid) => ({
    type: SET_RIVER_ID, riverid
})
let SetCommentAC = (commentid, username) => ({
    type: SET_COMMENT, commentid, username
})
export let SetComments = comments => dispatch => {
    comments.forEach(comment => {
        ApiUserAxios.GetUser(comment.userId).then(response => {
                dispatch(SetCommentAC(comment.commentid, response[0].fullName))
            }
        )
    })
}
export default RiverReducer