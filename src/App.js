import './App.css';
import './styles/Button.css'
import './styles/CheckBox.css'
import './styles/Inputs.css'
import backgroundStyle from './styles/Background.module.css'
import priroda from './assets/images/priroda.jpg'
import React from 'react'
import Main from './components/Main/Main';
import Rent from './components/Rent/Rent';
import Forum from './components/Forum/Forum';
import {Route, Router} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import UsersListContainer from "./components/UsersList/UsersListContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/Nav/NavContainer";
import {connect} from "react-redux";
import {InitializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import s from "./styles/Background.module.css";
import SuspenseWrapper from "./hoc/SuspenseWrapper";

const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))
const EditProfileContainer = React.lazy(() => import("./components/EditProfile/EditProfileContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <div className={"CenterPreloader"}><Preloader/></div>
        }
        return (
            <div className="App">
                <div><img className={`${backgroundStyle.back} ${backgroundStyle.image}`}
                          src={priroda}/>
                    <span className={`${backgroundStyle.back} ${backgroundStyle.gradient}`}/><span
                        className={s.backBlock}/></div>
                <HeaderContainer/>
                <div className="grid">

                    <NavContainer/>
                    <div className='content'>
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
                        <Route path='/edit-profile'
                               render={SuspenseWrapper(EditProfileContainer)}/>
                        <Route path='/users/all/:page'
                               render={() =>
                                   <UsersListContainer
                                       onlyFollowed={null}/>}/>
                        <Route path='/users/followed/:page'
                               render={() =>
                                   <UsersListContainer
                                       onlyFollowed={true}/>}/>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
})
export default connect(mapStateToProps, {InitializeApp})(App);
