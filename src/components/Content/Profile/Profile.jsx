import InputChangeNameContainer from "../../Input/InputChangeNameContainer";
import Button from "../../Button/Button";
import style from './Profile.module.css'
import React from "react";

const Profile = (props) => {
    if (props.isAuthorized) {
        return (
            <div className={style.Profile}>
                <div className={style.ProfileInner}>
                    Вы вошли как {props.username}
                    <InputChangeNameContainer store={props.store}/>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={style.Profile}>
                <div className={style.ProfileInner}>
                    Вы не вошли
                    <Button to='/profile/auth' text='Войти в систему' />
                </div>
            </div>
        );
    }

}

export default Profile;