import './App.css';
import React from 'react'
import Main from './components/Content/Main/Main';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Background from './components/Background/Background'
import Rent from './components/Content/Rent/Rent';
import Forum from './components/Content/Forum/Forum';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import ApiContainer from "./components/Content/Api/ApiContainer";
import ApiUserContainer from "./components/Content/ApiUser/ApiUserContainer";
/*npm install packetname -save чтобы сохранить запись об установленном пакете в package.json 
потому что пакеты из node modules не перекачиваются в git
npm install для скачивания модулей из package.json*/
/*rcc rcep rcredux */

const App = (props) => {
    let state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Background/>
                <div className="grid">

                    <Nav/>

                    <Route path='/profile'
                           render={() =>
                               <ProfileContainer
                                   store={props.store}
                               />}/>


                    <Route path='/rent'
                           render={() =>
                               <Rent Rent={state.Rent/*       REFACTOR          */}/>}/>

                    <Route path='/main'
                           render={() =>
                               <Main
                                   store={props.store}
                               />
                           }/>
                    <Route path='/user/:apiUserID'
                           render={()=>{
                               <ApiUserContainer/>
                           }}
                    />
                    <Route path='/forum'
                           render={() =>
                               <Forum/>}/>

                    <Route path='/api'
                           render={() => {
                               let pageHref = window.location.href.substring(window.location.href.indexOf('/api') + 5)
                               return <ApiContainer store={props.store}/>
                           }}/>


                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
