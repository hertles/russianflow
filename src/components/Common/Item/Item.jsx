import { NavLink } from 'react-router-dom'
import s from './Item.module.scss'

const Item = (props) => {

    return (
        <NavLink to={props.to}>
            <div className={`${s.item} backgroundBlock`}>
                <div className={s.imageContainer}>
                <img src={props.img} />
                </div>
                <div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.descr}>
                        {props.descr}

                    </div>
                    <span className={s.span}></span>
                </div>
            </div>
        </NavLink>
        )
}
export default Item

