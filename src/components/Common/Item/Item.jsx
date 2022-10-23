import { NavLink } from 'react-router-dom'
import s from './Item.module.css'

const Item = (props) => {

    return (
        <NavLink to={props.to}>
            <div className={`${s.item} backgroundBlock`}>
                <img src={props.img} />
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

