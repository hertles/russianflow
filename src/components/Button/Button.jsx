import style from './Button.module.css';
import { NavLink } from 'react-router-dom';
const Button = (props) => {
    let classes=`Button ${props.className}`
    if (props.active==true){
        classes=`Button Active`
    }
    if (props.to!=null)
        return(
                <NavLink to={props.to} ><div className={classes}>
                    {props.text}
                </div></NavLink>
        );
    if (props.to==null)
        return(
            <div className={classes} onClick={props.onClick}>
                {props.text}
            </div>
        )
}
export default Button;