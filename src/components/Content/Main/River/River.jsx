import style from './River.module.css';
import { YMaps, Map } from 'react-yandex-maps';
import InputRiverCommentContainer from '../../../Input/InputRiverCommentContainer';
const River = (props) => {
    return (
        <div>
            <YMaps>
                <div className='ymaps'>
                    <Map width='700px' height='425px' defaultState={{ center: [57.399137, 57.205733], zoom: 11.4 }} />
                </div>
            </YMaps>
            <div className={style.CommentsHeader}>Комментарии: ({props.Comments.length})</div>
            {props.Comments}
            <InputRiverCommentContainer riverid={props.riverid} userid={props.userid} store={props.store}/>
            
        </div>
    )
}
export default River;