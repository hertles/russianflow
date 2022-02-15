import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';
const Header = () => {
    return (
            <span className={s.Header} >
                <NavLink to='/main'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oganesson_zh-hans.svg/1200px-Oganesson_zh-hans.svg.png' className={s.logo} /></NavLink>
            </span>
    );
}
export default Header;