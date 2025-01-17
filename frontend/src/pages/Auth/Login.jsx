import style from "./Auth.module.css";
import Button from "@mui/material/Button";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <h1>Login</h1>
            <form action="POST" className={style.form}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </form>
            <Button className={style.button}>Login</Button>
            <a onClick={() => {navigate("/signup")}}>Do not have an accout yet?</a>
        </div>
    )
}

export default Login; 