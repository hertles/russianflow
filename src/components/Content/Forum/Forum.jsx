import s from './Forum.module.css'
import Section from './Section/Section';
import Message from '../../Message/Message';


const Forum = () => {
    document.getElementById("title").innerHTML='Форум';
    return(
        <div className={s.Forum}>
            <div className={s.NavForum}>
                <Section to='/forum/FAQ' name='Часто задаваемые вопросы'/>
                <Section to='/forum/coop' name='Организованные походы'/>
                <Section to='/forum/top' name='ТОП рек для сплавов'/>
                <Section to='/forum/places' name='Достопримечательности'/>
                <Section to='/forum/diary' name='Дневник туриста'/>
                <Section to='/forum/etc' name='Разное'/>
                
            </div>
            <div className={s.ContentForum}>

                <Message />
            </div>
        </div>
    )
}

export default Forum;