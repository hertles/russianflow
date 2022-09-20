
import style from "./Login.module.css"
import {Field, Form} from "react-final-form";
import {NotEmpty} from "../../../validators/fieldValidators";
const Login = (props)=>{
    const onSubmit = (formData) =>{
        props.LoginToAPI(formData.email,formData.password,formData.rememberMe)
    }
    return <div className={`${style.Login} backgroundBlock`}>
        <h3 className={style.header}>Авторизация</h3>
        <Form onSubmit={onSubmit}
              initialValues={{rememberMe: false}}
        render={({handleSubmit})=>(
            <form className={style.LoginForm} onSubmit={handleSubmit}>
                <Field validate={NotEmpty} className={style.authInput} name={'email'}>
                    {({ input, meta }) => (
                        <div>
                            <div>
                                <input {...input} className={`${style.authInput} ${meta.error && meta.touched && "errorInput"}`} type="text" autoComplete="false" placeholder="EMail" />
                            </div>
                            <div>
                                {meta.error && meta.touched && <span className={"errorMessage"}>{meta.error}</span>}
                            </div>
                        </div>
                    )}
                </Field>
                <Field validate={NotEmpty} className={style.authInput} name={'password'}>
                    {({ input, meta }) => (
                        <div>
                            <div>
                                <input {...input} className={`${style.authInput} ${meta.error && meta.touched && "errorInput"}`} type="password" autoComplete="false" placeholder="Пароль" />
                            </div>
                            <div>
                                {meta.error && meta.touched && <span className={"errorMessage"}>{meta.error}</span>}
                            </div>
                        </div>
                    )}
                </Field>
                <div className={style.lastLine}><div><label>Запомнить меня </label><Field name="rememberMe" component={"input"} type={"checkbox"} className={"checkbox"}/></div>
                <button className={`Button ${style.submit}`}>Войти</button></div>
            </form>
        )}/>
    </div>
}
export default Login