import s from './Comment.module.css'
import Button from "../../../../Button/Button";
import React from "react";
import LikeButtonContainer from "./LikeButton/LikeButtonContainer";



const Comment = (props) => {
    return (
        <div className={s.MessageBox}>
            <div className={s.UserName}><Button text={props.username}/></div>
                <div className={s.Message}>{props.message}</div>
                <div className={s.Line}>
                    <div className={s.Date}>{props.date}</div>
                    <div className={s.Likes}>
                        <LikeButtonContainer store={props.store} likesCount={props.likesCount} mode={props.mode} commentID={props.commentID} userID={props.store.getState().User.currentUserId}/>
                    </div>
                </div>
        </div>
    )
}
export default Comment;