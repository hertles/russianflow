import Button from "../Button/Button";
import style from "./Login.module.css"
const Login = (props)=>{
    return <div className={style.Auth}>
        <Button text="Войти" onclick={()=>props.Auth()}/>
    </div>
}
export default Login