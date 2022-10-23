import style from './Input.module.css'
import Button from '../Button/Button'
import React from 'react'
import {Field, Form} from "react-final-form";
import {NotEmpty} from "../../../validators/fieldValidators";

const Input = (props) => {
    let Click = (values) => {
        props.onSubmit(values.inputText.trim())
        values.inputText=""
    }
    return (
        <Form onSubmit={Click} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={`backgroundBlock ${style.MessageBox}`}>
                <Field name="inputText" placeholder={props.placeholder || ""} component={"input"} type={"text"}
                       autocomplete="off" validate={NotEmpty}>
                    {({input, meta}) => (
                        <>
                                <input data-testid={"input"} {...input} placeholder={(meta.error && meta.touched && "Заполните это поле") || ""}
                                               className={`${style.MessageInput} ${meta.error && meta.touched && "errorInput"}`}/>
                        </>
                    )}
                </Field>
                <div><input data-testid={"submit"} type={"submit"} value={props.submitText || 'Отправить'}
                            className={style.submit}/></div>
            </form>)}/>
    )
}
export default Input