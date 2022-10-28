import s from './Comment.module.css'
import Button from "../Button/Button";
import React from "react";


class Comment extends React.Component {
    render() {
        return (
            <div className={`backgroundBlock ${s.MessageBox}`}>
                <div className={s.UserName}><Button to={`/user/${this.props.userId}/`} text={this.props.username || `Пользователь с ID ${this.props.userId}`}/></div>
                <div className={s.Message} data-testid={"comment"}>{this.props.message}</div>
                <div className={s.Line}>
                    <div className={s.Date}>{this.props.date}</div>
                    <div className={s.Likes}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;