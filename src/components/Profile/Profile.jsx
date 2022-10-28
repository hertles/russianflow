import React from "react";
import style from './Profile.module.css'
import Button from "../Common/Button/Button";
import Preloader from "../Common/Preloader/Preloader";
import {SpanInfo} from "../Common/SpanInfo/SpanInfo";
import {NavLink} from "react-router-dom";

let Profile = (props) => {
    if (props.isFetching) {
        return <div className={`${style.Profile} backgroundBlock`}><Preloader/></div>
    }
    let MainButton = props.profile.followed === true
        ? <div className={`Button Active ${style.Subscribe} ${props.isGettingFollowed ? "ruler" : ""}`} onClick={() => {
            props.Unfollow(props.profile.userId)
        }}>
            {`Отписаться`}
        </div>
        : <div className={`Button ${style.Subscribe} ${props.isGettingFollowed ? "ruler" : ""}`} onClick={() => {
            props.Follow(props.profile.userId)

        }}>
            {`Подписаться`}
        </div>
    if (props.profile.userId === props.myId) {
        MainButton = <Button className={`${style.myProfileButton}`} to='/edit_profile'
                             text='Редактировать профиль'/>
    }
    if (!props.isAuth) {
        MainButton = <Button className={`${style.Subscribe}`} to='/login'
                             text='Подписаться'/>
    }
    let photo = props.profile.photos.large
    if (!props.profile.photos.large) {
        photo = 'https://gotrening.com/wp-content/uploads/2021/04/user.png'
    }
    let lookingForAJob = false
    lookingForAJob = props.profile.lookingForAJob ? 'да' : 'нет'
    return <div className={`${style.Profile} backgroundBlock`}><Button text={props.profile.fullName}/><NavLink to={"photo"}><img
        className={style.profilePhoto} src={photo}
        alt=""/></NavLink>
        <SpanInfo key={"id"} field={"ID пользователя"} description={props.profile.userId}/>
        <SpanInfo key={"status"} field={"Статус"} description={props.profile.status}/>
        <SpanInfo key={"aboutMe"} field={"Обо мне"} description={props.profile.aboutMe}/>
        <SpanInfo key={"lookingForAJob"} field={"Ищет работу"} description={lookingForAJob}/>
        <SpanInfo key={"lookingForAJobDescription"} field={"Профессиональные навыки"} description={props.profile.lookingForAJobDescription}/>
        <SpanInfo key={"Веб-сайт"} field={"website"} description={props.profile.contacts.website}/>
        <SpanInfo key={"github"} field={"github"} description={props.profile.contacts.github}/>
        <SpanInfo key={"vk"} field={"vk"} description={props.profile.contacts.vk}/>
        <SpanInfo key={"youtube"} field={"youtube"} description={props.profile.contacts.youtube}/>
        <SpanInfo key={"facebook"} field={"facebook"} description={props.profile.contacts.facebook}/>
        <SpanInfo key={"twitter"} field={"twitter"} description={props.profile.contacts.twitter}/>
        <SpanInfo key={"instagram"} field={"instagram"} description={props.profile.contacts.instagram}/>
        <SpanInfo key={"mainLink"} field={"mainLink"} description={props.profile.contacts.mainLink}/>
        {MainButton}
    </div>
}
export default Profile