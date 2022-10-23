import s from './Nav.module.css';
import Button from '../Common/Button/Button';

const Nav = (props) => {
    return (
        <span className={`${s.Nav} backgroundBlock`}>
            <Button to='/main' text='Реки'/>
            <Button to='/rent' text='Прокат'/>
            {props.userId!=null && <Button to={`/edit-profile`} text='Мой профиль'/>}
            <Button to='/forum/etc' text='Форум'/>
            <Button to={`/users/all/${props.page}`} text='Все пользователи'/>
            {props.userId!=null && <Button to={`/users/followed/${props.followedPage}`} text='Мои подписки'/>}
        </span>
    );
}
export default Nav;