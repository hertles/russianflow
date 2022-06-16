import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import Button from "../Button/Button";

const Header = (props) => {
    let AuthButton = <Button text='Войти' to={`/auth`}/>
    if (props.isAuth)
        AuthButton = <Button text={props.login} to={`/user/${props.userId}`}/>
    return (
        <span className={s.Header}>
                <NavLink to='/main'><img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oganesson_zh-hans.svg/1200px-Oganesson_zh-hans.svg.png'
                    className={s.logo}/></NavLink>{AuthButton}
            </span>
    );
}
export default Header;