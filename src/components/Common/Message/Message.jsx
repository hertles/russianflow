import s from './Message.module.css'
import Button from '../Button/Button'

const Message = (props) => {
    return (
        <div className={s.MessageBox}>
            <div className={s.UserName}><Button text={props.username} /></div>
            <div className={s.Message}>{props.message}</div>
            
        </div>
    )
}
export default Message;