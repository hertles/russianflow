import InputChangeNameContainer from "../../Input/InputChangeNameContainer";
import Button from "../../Button/Button";
import style from './Profile.module.css'
import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    return (
        <div className={style.Profile}>
            <div className={style.ProfileInner}>
                Вы вошли как {props.username}
                <InputChangeNameContainer store={props.store}/>
            </div>
        </div>
    );


}

export default Profile;