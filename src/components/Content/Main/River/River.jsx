import style from './River.module.css';
import { YMaps, Map } from 'react-yandex-maps';
import InputRiverCommentContainer from '../../../Input/InputRiverCommentContainer';
import React from "react";

class River extends React.Component {
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div>
                <YMaps>
                    <div className='ymaps'>
                        <Map width='700px' height='425px' defaultState={{center: [57.399137, 57.205733], zoom: 11.4}}/>
                    </div>
                </YMaps>
                <div className={style.CommentsHeader}>Комментарии: ({this.props.Comments.length})</div>
                {this.props.Comments}
                <InputRiverCommentContainer riverid={this.props.riverid} userid={this.props.userid}
                                            store={this.props.store}/>

            </div>
        )
    }
}

export default River;