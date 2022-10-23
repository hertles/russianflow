import style from './EditProfile.module.css'
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import Button from "../Common/Button/Button";
import {NavLink, Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import {Field, Form} from 'react-final-form'
import {MaxLengthCreator} from "../../validators/fieldValidators";


let EditProfile = (props) => {
    console.log("rendered")
    if (props.isFetching) {
        return <div className={`${style.EditProfile} backgroundBlock`}><Preloader/></div>
    }
    let photo = props.photos.large
    if (!props.photos.large) {
        photo = 'https://gotrening.com/wp-content/uploads/2021/04/user.png'
    }
    let lookingForAJob = false
    lookingForAJob = props.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'
    return <div className={`${style.EditProfile} backgroundBlock`}><Button text={props.fullName}/><img
        className={style.profilePhoto} src={photo}
        alt="your profile image"/>

        <Form onSubmit={props.ApplyChanges} initialValues={{status: props.status, job: props.lookingForAJob}} render={({handleSubmit}) => (
            <form className={style.form} onSubmit={handleSubmit}>
                <Field name="status" component={"input"} type={"text"}
                                                           autocomplete="off" validate={MaxLengthCreator(30)}>
                    {({ input, meta }) => (
                        <div className={style.statusInputBlock}>
                            <div className={style.info}>
                                Статус: <input {...input} className={`${style.statusInput} ${meta.error && meta.touched && "errorInput"}`} type="text" autoComplete="false" placeholder="Ваш статус" />
                            </div>
                            <div>
                                {meta.error && meta.touched && <span className={`errorMessage ${style.info}`}>{meta.error}</span>}
                            </div>
                        </div>
                    )}
                </Field>
                <div className={style.info}>Мой ID: {props.userId}</div>
                <div className={style.info}>Ищу работу: <Field className="checkbox" name="job" component="input" type="checkbox"/></div>
                <div className={style.buttonsBlock}>
                    <input type={"submit"} className={`${style.apply} Button`}
                           value="Сохранить"/>
                    <NavLink to={'/user/' + props.userId}><input type={"button"} className={`${style.apply} Button`}
                                                                 value="Посмотреть мой профиль"/></NavLink>
                    <Button className={`${style.apply} Button`} onClick={props.LogoutFromAPI} text={"Выйти"}/>
                    {props.saved ? <div className={style.saved}>Сохранено</div> : <div></div>}
                </div>
            </form>
        )}/>
    </div>
}
export default EditProfile