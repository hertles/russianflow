import { Route } from 'react-router';
import s from './Main.module.css';
import Item from '../../Item/Item';
import RiverContainer from './River/RiverContainer'
const Main = (props) => {
    document.getElementById("title").innerHTML = 'Маршруты';
    let state=props.store.getState()
    let RiverCards = state.Main.rivers.map((river) => (
        <Item to={'/main/river' + river.riverid} name={river.rivername} descr={river.riverdescr} img={river.riverimg} />
    ))
    let RiverRoute = state.Main.rivers.map((river) => (
        <Route exact path={'/main/river'+river.riverid} render={() => {
            return <RiverContainer store={props.store} riverid={river.riverid}/>
        }} />
    ))
    return (
        <div className={s.Content}>
            <Route exact path='/main' render={() => RiverCards} />
            {RiverRoute}
        </div>
    );
}

export default Main;