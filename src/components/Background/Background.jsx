import s from './Background.module.css'
const Background = () =>{
    const imageclasses = s.back + ' ' + s.image
    const gradientclasses = s.back + ' ' + s.gradient
    return (<div><img className={imageclasses} src='https://oir.mobi/uploads/posts/2021-05/thumbs/1622110273_23-oir_mobi-p-reka-ai-priroda-krasivo-foto-26.jpg'/>
    <span className={gradientclasses}></span></div>)
}
export default Background