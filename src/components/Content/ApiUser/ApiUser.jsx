import React from "react";
import style from './ApiUser.module.css'
import Button from "../../Button/Button";
import Preloader from "../../Preloader/Preloader";


let ApiUser = (props) => {
    if (props.isFetching) {
        return <div className={`${style.ApiUser} backgroundBlock`}><Preloader/></div>
    }
    let MainButton = props.followed === false
        ? <div className={`Button ${style.Subscribe} ${props.isGettingFollowed ? "ruler" : ""}`} onClick={() => {
            props.Follow(props.userId)
        }}>
            {`Подписаться`}
        </div>
        : <div className={`Button Active ${style.Subscribe} ${props.isGettingFollowed ? "ruler" : ""}`} onClick={() => {
            props.Unfollow(props.userId)

        }}>
            {`Отписаться`}
        </div>
    if (props.userId === props.myId) {
        MainButton = <Button className={`${style.myProfileButton}`} to='/edit-profile'
                             text='Редактировать профиль'/>
    }
    let photo = props.photos.large
    if (!props.photos.large) {
        photo = 'https://gotrening.com/wp-content/uploads/2021/04/user.png'
    }
    let lookingForAJob = false
    lookingForAJob = props.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'
    return <div className={`${style.ApiUser} backgroundBlock`}><Button text={props.fullName}/><img
        className={style.profilePhoto} src={photo}
        alt=""/>
        <div className={style.info}>Статус: {props.status}</div>
        <div className={style.info}>ID пользователя: {props.userId}</div>
        <div className={style.info}>Информация: {lookingForAJob}</div>
        {MainButton}
    </div>
}
export default ApiUser