import { Route } from 'react-router';
import s from './Main.module.css';
import Item from '../../Item/Item';
import RiverContainer from './River/RiverContainer'
import React from "react";
import * as axios from "axios";
import WithRiverContainer from "./River/RiverContainer";

class Main extends React.Component {
    componentDidMount() {

    }

    render() {
        document.getElementById("title").innerHTML = 'Маршруты';
        console.log('main')
        let state = this.props.store.getState()
        let RiverCards = state.Main.rivers.map((river) => (
            <Item to={'/main/river/' + river.riverid} name={river.rivername} descr={river.riverdescr}
                  img={river.riverimg}/>
        ))
        return (
            <div className={s.Content}>
                <Route exact path='/main' render={() => RiverCards}/>
                <Route path={'/main/river/:riverid'} render={() => {
                    return <WithRiverContainer store={this.props.store}/>
                }}/>
            </div>
        );
    }
}

export default Main;