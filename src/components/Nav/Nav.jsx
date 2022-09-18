import s from './Nav.module.css';
import Button from '../Button/Button';

const Nav = (props) => {
    let ProfileButton=""
    if (props.userId!=null){
        ProfileButton=<Button to={`/user/${props.userId}`} text='Мой профиль'/>
    }
    return (
        <span className={s.Nav}>
            <Button to='/main' text='Маршруты'/>
            <Button to='/rent' text='Прокат'/>
            {ProfileButton}
            <Button to='/forum/etc' text='Форум'/>
            <Button to={`/api/${props.page}`} text='React/Redux API'/>
        </span>
    );
}
export default Nav;