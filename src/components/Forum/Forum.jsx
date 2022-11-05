import s from './Forum.module.scss'
import Section from './Section/Section';
import Message from '../Common/Message/Message';


const Forum = () => {
    return(
        <div className={`backgroundBlock ${s.Forum}`}>
            <div className={`backgroundBlock ${s.NavForum}`}>
                <Section to='/forum/FAQ' name='Часто задаваемые вопросы'/>
                <Section to='/forum/coop' name='Организованные походы'/>
                <Section to='/forum/top' name='ТОП рек для сплавов'/>
                <Section to='/forum/places' name='Достопримечательности'/>
                <Section to='/forum/diary' name='Дневник туриста'/>
                <Section to='/forum/etc' name='Разное'/>
                
            </div>
            <div className={s.ContentForum}>


            </div>
        </div>
    )
}

export default Forum;