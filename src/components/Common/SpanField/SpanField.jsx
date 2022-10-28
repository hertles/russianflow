import React from 'react';
import {composeValidators, IsUrl, MaxLengthCreator, NotEmpty} from "../../../utils/validators/fieldValidators";
import style from "./SpanField.module.css";
import {Field} from "react-final-form";

function SpanField(props) {
    let validators=MaxLengthCreator(60)
    if (props.required)
        validators=composeValidators(NotEmpty,MaxLengthCreator(60))
    if (props.isUrl)
        validators=composeValidators(IsUrl,MaxLengthCreator(60))
    return (
        <Field autoComplete="off" name={props.name} component={"input"} type={"text"}
                validate={validators}>
            {({ input, meta }) => (
                <div className={style.inputBlock}>
                    <div className={style.info}>
                        <div>{props.span}:</div><div><input {...input} className={`${style.input} ${meta.error && meta.touched && "errorInput"}`} type="text" autoComplete="false" placeholder={props.placeholder || ""} /></div>
                        {meta.error && meta.touched && <span className={`errorMessage ${style.info}`}>{meta.error}</span>}
                    </div>
                </div>
            )}
        </Field>
    );
}

export default SpanField;