import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import Button from "../Common/Button/Button";
import {useHistory} from 'react-router-dom';
import {Route} from "react-router-dom";

const Header = (props) => {
    const history = useHistory();
    const Back = () => {
        history.goBack()
    }
    let AuthButton = <Button text='Войти' to={`/login`}/>
    if (props.isAuth)
        AuthButton = <Button text={props.login} to={`/edit-profile`}/>
    return (
        <span className={`${s.Header} backgroundBlock`}>
            <div className={s.leftSide}>
                <NavLink to='/main'><img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oganesson_zh-hans.svg/1200px-Oganesson_zh-hans.svg.png'
                    className={s.logo}/></NavLink>{AuthButton}</div>
            <div className={s.rightSide}><Route path={"/user"}
                                                render={() => <Button className={s.Back} onClick={() => Back()}
                                                                      text={"Назад"}/>}/><Route path={"/edit-profile"}
                                                                                                render={() => <Button
                                                                                                    className={s.Back}
                                                                                                    onClick={() => Back()}
                                                                                                    text={"Назад"}/>}/></div>
            </span>

    );
}
export default Header;