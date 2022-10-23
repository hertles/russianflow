import s from './Section.module.css'
import Button from '../../Common/Button/Button'

const Section = (props) =>{
    return(
        <div className={s.Message}>
            <Button text={props.name} to={props.to}>{props.name}</Button>
        </div>
    )
}
export default Section;