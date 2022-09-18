import './App.css';
import React from 'react'
import Main from './components/Content/Main/Main';
import Background from './components/Background/Background'
import Rent from './components/Content/Rent/Rent';
import Forum from './components/Content/Forum/Forum';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import ApiContainer from "./components/Content/Api/ApiContainer";
import ApiUserContainer from "./components/Content/ApiUser/ApiUserContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/Nav/NavContainer";
import LoginContainer from "./components/Auth/LoginContainer";
import EditProfileContainer from "./components/Content/EditProfile/EditProfileContainer";

const App = (props) => {
    let state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <Background/>
                <div className="grid">

                    <NavContainer/>
                    <div className='content'>
                        <Route path='/rent'
                               render={() =>
                                   <Rent Rent={state.Rent/*       REFACTOR          */}/>}/>

                        <Route path='/main'
                               render={() =>
                                   <Main
                                       store={props.store}
                                   />
                               }/>
                        <Route path='/user/:userId'
                               render={() => {
                                   return <ApiUserContainer/>
                               }}
                        />
                        <Route path='/forum'
                               render={() =>
                                   <Forum/>}/>
                        <Route path='/login'
                               render={() =>
                                   <LoginContainer/>}/>
                        <Route path='/edit-profile'
                               render={() =>
                                   <EditProfileContainer/>}/>
                        <Route path='/api/:page'
                               render={() => {
                                   return <ApiContainer store={props.store}/>
                               }}/>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
