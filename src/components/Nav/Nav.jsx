import s from './Nav.module.css';
import Button from '../Button/Button';
import style from "../Content/ApiUser/ApiUser.module.css";

const Nav = (props) => {
    let ProfileButton=""
    if (props.userId!=null){
        ProfileButton=<Button to={`/edit-profile`} text='Мой профиль'/>
    }
    return (
        <span className={`${s.Nav} backgroundBlock`}>
            <Button to='/main' text='Маршруты'/>
            <Button to='/rent' text='Прокат'/>
            {ProfileButton}
            <Button to='/forum/etc' text='Форум'/>
            <Button to={`/api/${props.page}`} text='React/Redux API'/>
        </span>
    );
}
export default Nav;