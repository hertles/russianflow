import {isValidHttpUrl} from "../../../utils/checkURL";
import style from "./SpanInfo.module.scss";
import React from "react";

export let SpanInfo = ({field, description}) => {
    if (!description){
        return null
    }
    if (isValidHttpUrl(description))
        description = <a href={description}>{description}</a>
    return <div className={style.info}><span className={style.field}>{field}</span> {description}</div>
}