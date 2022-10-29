import React from 'react';
import {composeValidators, IsUrl, MaxLengthCreator, NotEmpty} from "../../../utils/validators/fieldValidators";
import style from "./SpanField.module.css";
import {Field} from "react-final-form";
import classNames from "classnames";

function SpanField(props) {

    let validators=MaxLengthCreator(60)
    if (props.required)
        validators=composeValidators(NotEmpty,MaxLengthCreator(60))
    if (props.isUrl)
        validators=composeValidators(IsUrl,MaxLengthCreator(60))
    return (
        <Field type={props.type || "text"} autoComplete="off" name={props.name} component={"input"}
                validate={validators}>
            {({ input, meta }) => (
                <div className={classNames(style.inputBlock, props.className)}>
                        {props.span && <div>{props.span}</div>}<div><input {...input} className={`${style.input} ${(meta.error || meta.submitError) && meta.touched && "errorInput"}`} autoComplete="false" placeholder={props.placeholder || ""} /></div>
                        {meta.error && meta.touched && <span className={`errorMessage`}>{meta.error}</span>}
                        {meta.submitError && meta.touched && <span className={`errorMessage`}>{meta.submitError}</span>}
                </div>
            )}
        </Field>
    );
}

export default SpanField;