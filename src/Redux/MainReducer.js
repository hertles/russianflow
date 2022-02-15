let initialState = {
    rivers: [
        {
            riverid: 0,
            rivername: 'Река Ай',
            riverdescr: 'Попадя в круг, первым делом включи Михаила Круга',
            riverimg: 'https://i08.fotocdn.net/s113/509da19195574f18/public_pin_l/2556954570.jpg'
        },
        {
            riverid: 1,
            rivername: 'Река Белая',
            riverdescr: 'В республике очень любят эту реку, для них она является самой важной и почитаемой природной ценностью. Река Белая — это визитная карточка Башкирии и ее символ, она играет значительную роль в народном фольклоре, о ней сложено множество легенд.',
            riverimg: 'http://s1.fotokto.ru/photo/full/87/875631.jpg'
        },
        {
            riverid: 2,
            rivername: 'Река Чусовая',
            riverdescr: 'Начинаясь в Азии, пересекает Уральские горы и течет в Европу',
            riverimg: 'https://s3.nat-geo.ru/images/2019/5/16/213acd2815a54b0188e9c45b71372f57.max-1200x800.jpg'
        },
        {
            riverid: 3,
            rivername: 'Река Сылва',
            riverdescr: 'Спокойная река для семейных сплавов. Шум поездов будет сопутствовать вам всю дорогу',
            riverimg: 'https://pbs.twimg.com/media/EkUZbqEX0AIk2uF.jpg:large'
        },
        {
            riverid: 4,
            rivername: 'Река Усьва',
            riverdescr: 'Там где тот самый Чёртов Палец',
            riverimg: 'https://a.d-cd.net/gEAAAgMz-OA-1920.jpg'
        },
        {
            riverid: 5,
            rivername: 'Река Юрюзань',
            riverdescr: 'Удивительно быстрый весной и спокойный летом речной маршрут на ней – только туристический и только рекреационный. Не будет опасных перекатов и надоедливых «расчесок», нет прижимов, сливов и валов. Только спокойный, созерцательный сплав посреди естественной природы Башкортостана.',
            riverimg: 'https://pibig.info/uploads/posts/2021-06/1623108922_21-pibig_info-p-reka-yuryuzan-v-bashkirii-priroda-krasivo-23.jpg'
        }
    ],
    comments: [
        {
            commentid: 0,
            riverid: 0,
            userid: 0,
            comment: 'Я попал в круг ещё два года назад, пытался пройти через лес - выходил к реке, пытался плыть против течения - река потекла в другую сторону. Что мне делать?',
            date: new Date(2022,1,27,13,23),
            LikedUsersIDs: [1, 2]
        },
        {
            commentid: 1,
            riverid: 0,
            userid: 1,
            comment: 'Включи Михаила Круга.',
            date: new Date(2022,1,27,15,2),
            LikedUsersIDs: []
        },
        {
            commentid: 2,
            riverid: 0,
            userid: 0,
            comment: 'Спасибо, сработало!',
            date: new Date(2022,1,27,15,5),
            LikedUsersIDs: []
        },
    ],
    likes: [
        {commentid: 0, userid: 1},
        {commentid: 1, userid: 2},
        {commentid: 1, userid: 0},
        {commentid: 1, userid: 1},
    ],
    newCommentText: '',

}
const MainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_COMMENT': {
            let StateCopy = {...state}
            if (action.new_comment.trim()!=''){
                StateCopy.comments = [...state.comments]
                StateCopy.comments.push({
                    commentid: StateCopy.comments.length,
                    riverid: action.new_riverid,
                    userid: action.new_userid,
                    comment: action.new_comment,
                    date: action.new_date,
                    LikedUsersIDs: []
                })
                StateCopy.newCommentText = ''
            }
            return StateCopy;
            break;
        }
        case 'CHANGE_COMMENT_TEXT_AREA': {
            let StateCopy = {...state}
            StateCopy.newCommentText = action.new_comment_text
            return StateCopy;
            break;
        }
        case 'LIKE' : {
            let StateCopy = {
                ...state,
                likes: [...state.likes]
            }
            StateCopy.likes.push({commentid: action.commentID, userid:action.userID})
            return StateCopy;
            break;
        }
        case 'DISLIKE' : {
            let StateCopy = {
                ...state,
                likes: state.likes.map(like=>like)
            }
            for (let i = 0; i < StateCopy.likes.length; i++) {
                if (StateCopy.likes[i].userid == action.userID && StateCopy.likes[i].commentid == action.commentID){
                    StateCopy.likes.splice(i,1)
                }
            }
            return StateCopy;
            break;
        }
        default:
            return state;
            break;
    }

}
export let MainActionCreator = (new_riverid, new_userid, inputText, date) => ({
    type: 'ADD_COMMENT', new_riverid: new_riverid, new_userid: new_userid, new_comment: inputText, new_date: date
})
export let LikeActionCreator = (commentID, userID) => ({
    type: 'LIKE', commentID: commentID, userID: userID
})
export let DislikeActionCreator = (commentID, userID) => ({
    type: 'DISLIKE', commentID: commentID, userID: userID
})
export default MainReducer