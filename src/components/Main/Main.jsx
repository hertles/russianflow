import { Route } from 'react-router-dom';
import s from './Main.module.css';
import Item from '../Common/Item/Item';
import React from "react";
import RiverContainer from "./River/RiverContainer";
import {connect} from "react-redux";

class Main extends React.Component {
    componentDidMount() {

    }

    render() {
        let RiverCards = this.props.rivers.map((river) => (
            <Item key={river.riverid} to={'/main/river/' + river.riverid} name={river.rivername} descr={river.riverdescr}
                  img={river.riverimg}/>
        ))
        return (
            <div className={s.Content}>
                <Route exact path='/main' render={() => RiverCards}/>
                <Route path={'/main/river/:riverid'} render={() => {
                    return <RiverContainer/>
                }}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    rivers: state.Main.rivers
})
export default connect(mapStateToProps)(Main);