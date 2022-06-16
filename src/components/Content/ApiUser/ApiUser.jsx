import React from "react";
import style from './ApiUser.module.css'
import Button from "../../Button/Button";
import Preloader from "../../Preloader/Preloader";
import axios from "axios";


let ApiUser = (props) => {
    if (props.isFetching){
        return <div className={style.ApiUser}><Preloader/></div>
    }
    let photo = props.photos.large
    if (!props.photos.large) {
        photo = 'https://gotrening.com/wp-content/uploads/2021/04/user.png'
    }
    let lookingForAJob = false
    lookingForAJob = props.lookingForAJob ?  'Ищет работу' : 'Не ищет работу'
    return <div className={style.ApiUser}><Button text={props.fullName}/><img className={style.profilePhoto} src={photo}
                                                                              alt=""/>

        <div className={style.info}>ID пользователя: {props.userId}</div>
        <div className={style.info}>Информация: {lookingForAJob}</div>
        {props.followed === false
            ? <div className={`Button ${style.Subscribe} ${props.isGettingFollowed?"ruler" : ""}`} onClick={() => {
                if (!props.isGettingFollowed){
                    props.FetchingFollowStart()
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {},{withCredentials: true, headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'}}).then(response => {
                            if (!response.data.resultCode){
                                props.Follow(props.userId)
                            }
                            props.FetchingFollowEnd()
                    })
                }
            }}>
                {`Подписаться`}
            </div>
            : <div className={`Button Active ${style.Subscribe} ${props.isGettingFollowed?"ruler" : ""}`} onClick={() => {
                if (!props.isGettingFollowed){
                    props.FetchingFollowStart()
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {withCredentials: true, headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'}}).then(response => {
                        if (!response.data.resultCode){
                            props.Unfollow(props.userId)
                        }
                        props.FetchingFollowEnd()
                    })
                }

            }}>
                {`Отписаться`}
            </div>
        }
    </div>
}
export default ApiUser