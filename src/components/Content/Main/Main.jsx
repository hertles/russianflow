import { Route } from 'react-router';
import s from './Main.module.css';
import Item from '../../Item/Item';
import RiverContainer from './River/RiverContainer'
import React from "react";
import * as axios from "axios";

class Main extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(data => console.log(data))
    }

    render() {
        document.getElementById("title").innerHTML = 'Маршруты';
        let state = this.props.store.getState()
        let RiverCards = state.Main.rivers.map((river) => (
            <Item to={'/main/river' + river.riverid} name={river.rivername} descr={river.riverdescr}
                  img={river.riverimg}/>
        ))
        let RiverRoute = state.Main.rivers.map((river) => (
            <Route exact path={'/main/river' + river.riverid} render={() => {
                return <RiverContainer store={this.props.store} riverid={river.riverid}/>
            }}/>
        ))
        return (
            <div className={s.Content}>
                <Route exact path='/main' render={() => RiverCards}/>
                {RiverRoute}
            </div>
        );
    }
}

export default Main;