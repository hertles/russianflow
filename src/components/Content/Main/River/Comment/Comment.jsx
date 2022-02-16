import s from './Comment.module.css'
import Button from "../../../../Button/Button";
import React from "react";
import LikeButtonContainer from "./LikeButton/LikeButtonContainer";


class Comment extends React.Component {
    render() {
        return (
            <div className={s.MessageBox}>
                <div className={s.UserName}><Button text={this.props.username}/></div>
                <div className={s.Message}>{this.props.message}</div>
                <div className={s.Line}>
                    <div className={s.Date}>{this.props.date}</div>
                    <div className={s.Likes}>
                        <LikeButtonContainer store={this.props.store} likesCount={this.props.likesCount}
                                             mode={this.props.mode} commentID={this.props.commentID}
                                             userID={this.props.store.getState().User.currentUserId}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;