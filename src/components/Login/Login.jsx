
import style from "./Login.module.scss"
import {Field, Form} from "react-final-form";
import {NotEmpty} from "../../utils/validators/fieldValidators";
import {useHistory} from "react-router-dom";
import {FORM_ERROR} from "final-form";
import SpanField from "../Common/SpanField/SpanField";
import React from "react";
import classNames from "classnames";

const Login = (props)=>{
    console.log(props)
    const history=useHistory()
    let error = ''
    const onSubmit = async (formData) =>{
        error = await props.LoginToAPI(formData.email,formData.password,formData.rememberMe,formData.captcha)
        console.log(error)
        switch (error) {
            case "Incorrect Email or Password":
                return {[FORM_ERROR]: "Неверный пароль или логин"}
            case "Enter valid Email":
                return {email: "Введите корректный EMail"}
            case "Incorrect anti-bot symbols":
                return {[FORM_ERROR]: "Проверьте правильность заполнения капчи"}
            default:
                break
        }
    }

    return <div className={`${style.Login} backgroundBlock`}>
        <h3 className={style.header}>Авторизация</h3>

        <Form onSubmit={onSubmit}
              initialValues={{rememberMe: false}}
        render={({handleSubmit, submitError})=>(
            <form className={classNames([style.LoginForm,{[style.fetchingShield]:props.isFetching}])} onSubmit={handleSubmit}>
                <SpanField className={style.authInput} required={true} name={"email"} span={"EMail"} placeholder={"EMail"}/>
                <SpanField type={"password"} className={style.authInput} required={true} name={"password"} span={"Пароль"} placeholder={"Пароль"}/>
                {props.captchaUrl && <div><img alt={"captcha"} className={style.captcha} src={props.captchaUrl}/>
                    <SpanField className={style.authInput} required={true} name={"captcha"}/></div>}
                {submitError && <span className={"errorMessage"}>{submitError}</span>}
                <div className={style.lastLine}><div className={style.rememberMe}><label>Запомнить меня </label><Field name="rememberMe" component={"input"} type={"checkbox"} className={"checkbox"}/></div><div className={style.RegAuth}><a target={"_blank"} href={"https://social-network.samuraijs.com/signUp"}><div className={`Button ${style.submit}`}>Регистрация</div></a><input type={"submit"} className={classNames(['Button'])} value={"Войти"}/></div></div>
            </form>
        )}/>
    </div>
}
export default Login