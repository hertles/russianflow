import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import Button from "../Common/Button/Button";
import {useHistory} from 'react-router-dom';
import {Route} from "react-router-dom";
import Burger_button from '../../assets/images/burger_menu.png'
import React from "react";
import NavContainer from "../Nav/NavContainer";

const Header = (props) => {
    const history = useHistory();
    const Back = () => {
        history.goBack()
    }
    let AuthButton = <Button text='Войти' to={`/login`}/>
    if (props.isAuth)
        AuthButton = <Button text={props.login} to={`/edit_profile`}/>
    return (
        <span className={`${s.Header} backgroundBlock`}>

            <div className={s.leftSide}>
                <NavLink to='/main'><img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oganesson_zh-hans.svg/1200px-Oganesson_zh-hans.svg.png'
                    className={s.logo}/></NavLink><div className={s.AuthButton}>{AuthButton}</div></div>
            <div className={s.rightSide}><input id="inputBurger" type="checkbox"/><label htmlFor="inputBurger"
                                                                                         id="Burger"><img
                src={Burger_button} alt="open_menu"/></label>{/*<Route path={"/user"}
                                                render={() => <Button className={s.Back} onClick={() => Back()}
                                                                      text={"Назад"}/>}/><Route path={"/edit_profile"}
                                                                                                render={() => <Button
                                                                                                    className={s.Back}
                                                                                                    onClick={() => Back()}
                                                                                                    text={"Назад"}/>}/>*/}
                <div id={"MobileNavigation"} className={"backgroundBlock"}>
                    <NavContainer/>
                </div>
            </div>
            </span>

    );
}
export default Header;