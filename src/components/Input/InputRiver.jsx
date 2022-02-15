import style from './Input.module.css'
import Button from '../Button/Button'
import React from 'react'

const Input = (props)=> {
    let inputClasses="form-control "+style.MessageInput
    const inputRef = React.createRef();
    let Change = () =>{
        props.Change(inputRef.current.value)
    }
    let Click = () =>{
        props.Click(inputRef.current.value, props.riverid, props.userid)
    }
    return (
        <div className={style.MessageBox}>
              <input type="text" ref={inputRef} value={props.value} onChange={Change} className={inputClasses} placeholder='Добавить комментарий'/>
            <div className={style.UserName} onClick={Click}><Button text='Отправить'/></div>
        </div>
    )
}
export default Input