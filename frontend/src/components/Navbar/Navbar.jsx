import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href="/">Home</a>
            <a href="/profile">Profile</a>
        </div>
    )
}

export default Navbar;