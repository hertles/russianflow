import React, {Component} from 'react';
import style from "./UsersList.module.scss";
import {NavLink} from "react-router-dom";

class User extends Component {
    render() {
        let user = this.props.user
        return (
            <div className={style.Name} >
                <NavLink to={`/user/${user.id}/`}>
                    <img className={style.Avatar}
                         src={`${user.photos.small ? user.photos.small : 'https://gotrening.com/wp-content/uploads/2021/04/user.png'}`}/>
                </NavLink>
                <NavLink className={`Button ${style.NameButton}`} to={`/user/${user.id}/`}>
                    {`${user.name}`}
                </NavLink>
                {user.id !== this.props.myId && !user.followed && <div
                    className={`Button ${style.Subscribe} ${this.props.isGettingFollowedUsers.some(id => id === user.id) ? "ruler" : ""}`}
                    onClick={() => {
                        this.props.Follow(user.id)
                    }}>
                    {`Подписаться`}
                </div>}
                {user.id !== this.props.myId && user.followed && <div
                    className={`Button Active ${style.Subscribe} ${this.props.isGettingFollowedUsers.some(id => id === user.id) ? "ruler" : ""}`}
                    onClick={() => {
                        this.props.Unfollow(user.id)
                    }}>
                    {`Отписаться`}
                </div>}

                {user.id === this.props.myId && <NavLink to={"/edit_profile"}>
                    <div
                        className={`Button Active ${style.Subscribe} ${style.Edit} ${this.props.isGettingFollowedUsers.some(id => id === user.id) ? "ruler" : ""}`}>
                        {`Редактировать`}
                    </div>
                </NavLink>}
            </div>
        );
    }
}

export default User;