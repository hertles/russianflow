import './App.scss';
import './styles/Button.scss'
import './styles/CheckBox.scss'
import './styles/Inputs.scss'
import backgroundStyle from './styles/Background.module.scss'
import priroda from './assets/images/priroda.jpg'
import React from 'react'
import Main from './components/Main/Main';
import Rent from './components/Rent/Rent';
import Forum from './components/Forum/Forum';
import {Route, Router, Switch} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import UsersListContainer from "./components/UsersList/UsersListContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/Nav/NavContainer";
import {connect} from "react-redux";
import {InitializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import s from "./styles/Background.module.scss";
import SuspenseWrapper from "./utils/hoc/SuspenseWrapper";
import Photo from "./components/Common/Photo/Photo";

const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))
const EditProfileContainer = React.lazy(() => import("./components/EditProfile/EditProfileContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <div className="App" data-testid={"app"}>
                <div className={"CenterPreloader"}><Preloader/></div>
            </div>
        }
        return (
            <div className="App" data-testid={"app"}>
                <div><img className={`${backgroundStyle.back} ${backgroundStyle.image}`}
                          src={priroda}/>
                    <span className={`${backgroundStyle.back} ${backgroundStyle.gradient}`}/>
                </div>

                <Route path='/user/:userId/photo'
                       render={() =>
                           <Photo/>}/>
                <span
                    className={s.backBlock}>
                <div className="grid">
                    <HeaderContainer/>
                    <NavContainer id={"LeftNav"}/>
                    <div className='content'>
                        <Switch>
                            <Route path='/rent'
                                   render={() =>
                                       <Rent/>}/>
                            <Route exact path={'/'}
                                   render={() =>
                                       <Redirect to={"/main"}/>}/>
                            <Route path='/main'
                                   render={() =>
                                       <Main/>}/>
                            <Route path='/user/:userId'
                                   render={() =>
                                       <ProfileContainer/>}/>

                            <Route path='/forum'
                                   render={() =>
                                       <Forum/>}/>
                            <Route path='/login'
                                   render={SuspenseWrapper(LoginContainer)}/>
                            <Route path='/edit_profile'
                                   render={SuspenseWrapper(EditProfileContainer)}/>
                            <Route path='/users/all/:page'
                                   render={() =>
                                       <UsersListContainer
                                           onlyFollowed={null}/>}/>
                            <Route path='/users/followed/:page'
                                   render={() =>
                                       <UsersListContainer
                                           onlyFollowed={true}/>}/>
                            <Route path='*'
                                   render={() =>
                                       <div className={`backgroundBlock error404`}><h1>Ошибка 404</h1><br/>Страница не
                                           найдена</div>}/>
                        </Switch>

                    </div>

                </div></span>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
})
export default connect(mapStateToProps, {InitializeApp})(App);
