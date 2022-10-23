import React, {Component} from 'react';
import style from './UsersList.module.css'
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {Field, Form} from "react-final-form";
import User from "./User";

let UsersList = props => {
    let url = '/users/all/'
    if (props.onlyFollowed) {
        url = '/users/followed/'
    }
    const paginationCount = 7
    let numbers = []
    let maxPage = props.totalPages > paginationCount ? paginationCount : props.totalPages
    for (let i = 1; i <= maxPage; i++) {
        numbers.push(i)
    }
    if (props.page >= paginationCount-1 && props.page <= props.totalPages - Math.floor(paginationCount/2)) {
        numbers = []
        for (let i = props.page - Math.floor(paginationCount/2); i <= props.page + Math.floor(paginationCount/2); i++) {
            numbers.push(i)
        }
    } else if (props.page > props.totalPages - Math.floor(paginationCount/2) && props.totalPages !== 0) {
        numbers = []
        for (let i = props.totalPages - (maxPage - 1); i <= props.totalPages; i++) {
            numbers.push(i)
        }
    }
    let Back = ''
    let Next = ''
    if (props.page !== 1) {
        Back = <NavLink to={props.page > 1 && url + (props.page - 1)}>
            <div className={`Button ${style.Back}`}
                 onClick={props.PageMinus}>Назад
            </div>
        </NavLink>
    }
    if (props.page !== props.totalPages && props.totalPages !== 0) {
        Next = <NavLink to={props.page < props.totalPages && url + (props.page + 1)}>
            <div className={`Button ${style.Next}`}
                 onClick={props.PagePlus}>Дальше
            </div>
        </NavLink>
    }

    return (
        <div className={`${style.Api} backgroundBlock`}>
            <div className={style.NameList}>
                <Form onSubmit={(values) => props.Search(values.search)} initialValues={{search: props.searchString}}
                      render={({handleSubmit}) => (
                          <form className={style.searchForm} onSubmit={handleSubmit}>
                              <Field component={'input'} placeholder={"Начните искать..."} name={"search"}
                                     className={style.searchInput} autoComplete={"false"}/>
                              <input value={"Поиск"} type={"submit"}/>
                          </form>
                      )}/>
                {props.isFetching ? <Preloader/> : props.list.map((user, index) =>
                    <User {...props} key={index} user={user}/>
                )}
                {!props.onlyFollowed && !props.isFetching && props.totalPages === 0 &&
                <h4 className={style.nothingFind}>Ничего не найдено</h4>}
                {props.onlyFollowed && !props.isFetching && props.totalPages === 0 &&
                <h4 className={style.nothingFind}>Среди подписок ничего не найдено</h4>}
            </div>
            <div className={style.Navigation}>
                {Back}
                {numbers.map(number => <NavLink key={number} to={url + number}>
                    <div onClick={() => props.PageSet(number)}
                         className={`Button ${style.Digit} ${props.page === number && 'Active'}`}>
                        {number}
                    </div>
                </NavLink>)}
                {Next}
            </div>
        </div>
    );
}
export default UsersList;