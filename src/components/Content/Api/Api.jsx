import React, {Component} from 'react';
import style from './Api.module.css'
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import '../../../styles/Button.css'
import axios from "axios";

let Api = props => {
    let numbers = [1, 2, 3, 4, 5]
    if (props.page >= 4 && props.page <= props.totalPages - 2) {
        numbers = []
        for (let i = props.page - 2; i <= props.page + 2; i++) {
            numbers.push(i)
        }
    }
    if (props.page > props.totalPages - 2 && props.totalPages != 0) {
        numbers = []
        for (let i = props.totalPages - 4; i <= props.totalPages; i++) {
            numbers.push(i)
        }
    }
    let Back = ''
    let Next = ''
    if (props.page != 1) {
        Back = <div className={`Button ${style.Back}`}
                    onClick={props.PageMinus} /*to={props.page>1 && '/api/'+(props.page-1)}*/>Назад</div>
    }
    if (props.page != props.totalPages) {
        Next = <div className={`Button ${style.Next}`}
                    onClick={props.PagePlus} /*to={props.page<props.totalPages && '/api/'+(props.page+1)}*/>Дальше</div>
    }
    return (
        <div className={style.Api}>
            <div className={style.NameList}>
                {props.isFetching ? <Preloader/> : props.list.map((item, index) =>
                    <div className={style.Name}>
                        <NavLink to={`/user/${item.id}`}>
                            <img className={style.Avatar}
                                 src={`${item.photos.small ? item.photos.small : 'https://gotrening.com/wp-content/uploads/2021/04/user.png'}`}/>
                        </NavLink>
                        <NavLink to={`/user/${item.id}`}>
                            <div className={`Button ${style.NameButton}`}>
                                {/*`${index + 1 + (props.page - 1) * props.count}. */`${item.name}`}
                            </div>
                        </NavLink>
                        {item.followed == false
                            ? <div className={`Button ${style.Subscribe} ${props.isGettingFollowedUsers.some(id=>id===item.id)?"ruler" : ""}`} onClick={() => {
                                props.FetchingFollowStart(item.id)
                                if (!props.isGettingFollowedUsers.some(id=>id===item.id)){
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {},{withCredentials: true, headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'}}).then(response => {
                                        if (!response.data.resultCode){
                                            props.Follow(item.id)
                                        }
                                    })
                                }
                                props.FetchingFollowEnd(item.id)
                            }}>
                                {`Подписаться`}
                            </div>
                            : <div className={`Button Active ${style.Subscribe} ${props.isGettingFollowedUsers.some(id=>id===item.id)?"ruler" : ""}`} onClick={() => {
                                debugger
                                props.FetchingFollowStart(item.id)
                                debugger
                                if (!props.isGettingFollowedUsers.some(id=>id===item.id)){
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {withCredentials: true, headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'}}).then(response => {
                                        if (!response.data.resultCode){
                                            props.Unfollow(item.id)
                                        }
                                    })
                                }
                                props.FetchingFollowEnd(item.id)
                            }}>
                                {`Отписаться`}
                            </div>
                        }
                    </div>
                )}
            </div>
            <div className={style.Navigation}>
                {Back}
                {numbers.map(number => <NavLink to={"/api/"+number}><div active={props.page == number && true} onClick={() => props.PageSet(number)}
                                            className={`Button ${style.Digit} ${props.page == number && 'Active'}`}>
                    {number}
                </div></NavLink>)}
                {Next}
            </div>
        </div>
    );
}
export default Api;