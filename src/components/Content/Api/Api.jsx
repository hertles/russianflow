import React, {Component} from 'react';
import style from './Api.module.css'
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";

let Api = props => {
    let numbers = [1, 2, 3, 4, 5]
    if (props.page >= 4 && props.page <= props.totalPages - 2) {
        numbers = []
        for (let i = props.page - 2; i <= props.page + 2; i++) {
            numbers.push(i)
        }
    } else if (props.page > props.totalPages - 2 && props.totalPages !== 0) {
        numbers = []
        for (let i = props.totalPages - 4; i <= props.totalPages; i++) {
            numbers.push(i)
        }
    }
    let Back = ''
    let Next = ''
    if (props.page !== 1) {
        Back = <NavLink to={props.page > 1 && '/api/' + (props.page - 1)}>
            <div className={`Button ${style.Back}`}
                 onClick={props.PageMinus}>Назад
            </div>
        </NavLink>
    }
    if (props.page !== props.totalPages) {
        Next = <NavLink to={props.page < props.totalPages && '/api/' + (props.page + 1)}>
            <div className={`Button ${style.Next}`}
                 onClick={props.PagePlus}>Дальше
            </div>
        </NavLink>
    }
    return (
        <div className={`${style.Api} backgroundBlock`}>
            <div className={style.NameList}>
                {props.isFetching ? <Preloader/> : props.list.map((user, index) =>
                    <div className={style.Name}>
                        <NavLink to={`/user/${user.id}`}>
                            <img className={style.Avatar}
                                 src={`${user.photos.small ? user.photos.small : 'https://gotrening.com/wp-content/uploads/2021/04/user.png'}`}/>
                        </NavLink>
                        <NavLink to={`/user/${user.id}`}>
                            <div className={`Button ${style.NameButton}`}>
                                {`${user.name}`}
                            </div>
                        </NavLink>
                        {user.followed === false
                            ? <div
                                className={`Button ${style.Subscribe} ${props.isGettingFollowedUsers.some(id => id === user.id) ? "ruler" : ""}`}
                                onClick={() => {
                                    props.Follow(user.id)
                                }}>
                                {`Подписаться`}
                            </div>
                            : <div
                                className={`Button Active ${style.Subscribe} ${props.isGettingFollowedUsers.some(id => id === user.id) ? "ruler" : ""}`}
                                onClick={() => {
                                    props.Unfollow(user.id)
                                }}>
                                {`Отписаться`}
                            </div>
                        }
                    </div>
                )}
            </div>
            <div className={style.Navigation}>
                {Back}
                {numbers.map(number => <NavLink to={"/api/" + number}>
                    <div active={props.page === number && true} onClick={() => props.PageSet(number)}
                         className={`Button ${style.Digit} ${props.page === number && 'Active'}`}>
                        {number}
                    </div>
                </NavLink>)}
                {Next}
            </div>
        </div>
    );
}
export default Api;