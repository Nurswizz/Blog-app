import { useNavigate } from "react-router";
import style from "./Auth.module.css";
import Button from "@mui/material/Button";

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <h1>Sign Up</h1>
            <form action="POST" className={style.form}>
                <label htmlFor="firstName">First Name</label>   
                <input type="text" id="firstName" name="firstName" required />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
            </form>
            <Button className={style.button}>Sign Up</Button>
            <a onClick={() => {navigate("/login")}}>Already have an account? </a>
        </div>
    )
}

export default SignUp;