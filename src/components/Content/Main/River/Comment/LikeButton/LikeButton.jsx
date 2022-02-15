import s from './LikeButton.module.css';
import React from "react";

const LikeButton = (props) => {
    let Like = () => {
        props.Like(props.commentID, props.userID)
    }
    let Dislike = () => {
        props.Dislike(props.commentID, props.userID)
    }
    let classes = s.Button
    let src = "https://cdn.iconscout.com/icon/free/png-256/heart-love-like-favorite-46263.png"
    let Click = Like
    if (props.mode) {
        classes = classes + ' ' + s.active
        src = 'https://cdn.iconscout.com/icon/free/png-256/heart-love-like-favorite-save-46261.png'
        Click = Dislike
    }
    return (
        <div className={classes} onClick={Click}>
            <div className={s.LikeInner}>
                <div className={s.LikesCounter}>{props.likesCount}</div>
                <img className={s.LikeImage}
                     src={src} alt="like"/>
            </div>
        </div>
    );

}
export default LikeButton;