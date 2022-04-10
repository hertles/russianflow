import React, {Component} from 'react';
import style from './Api.module.css'
import Button from "../../Button/Button";
import spinner from '../../../assets/images/spinner.gif'

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
        Back = <Button className={style.Back} text={'Назад'}
                       onClick={props.PageMinus} /*to={props.page>1 && '/api/'+(props.page-1)}*/></Button>
    }
    if (props.page != props.totalPages) {
        Next = <Button className={style.Next} text={'Дальше'}
                       onClick={props.PagePlus} /*to={props.page<props.totalPages && '/api/'+(props.page+1)}*/></Button>
    }
    return (
        <div className={style.Api}>
            <div className={style.NameList}>
                {props.isFetching ? <img className={style.spinner} src={spinner}/> : props.list.map((item, index) =>
                    <div
                        className={style.Name}><Button to={`user/${item.id}`} text={`${index + 1 + (props.page - 1) * props.count}. ${item.name}`}/></div>
                )}
            </div>
            <div className={style.Navigation}>
                {Back}
                {numbers.map(number => <Button className={style.Digit} active={props.page == number && true}
                                               text={number}
                                               onClick={() => props.PageSet(number)} /*to={'/api/'+number}*/></Button>)}
                {Next}
            </div>
        </div>
    );
}
export default Api;