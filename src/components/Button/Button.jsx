import s from './Button.module.css';
import { NavLink } from 'react-router-dom';
const Button = (props) => {
    if (props.to!=null)
        return(
                <NavLink to={props.to}><div className={s.Button}>
                    {props.text}
                </div></NavLink>
        );
    if (props.to==null)
        return(
            <div className={s.Button}>
                {props.text}
            </div>
        )
}
export default Button;