import s from'./Auth.module.css'
const Auth = () => {
    document.getElementById("title").innerHTML='Войти';
    return (
        <div className={s.Auth}>Войти</div>
    )
}
export default Auth