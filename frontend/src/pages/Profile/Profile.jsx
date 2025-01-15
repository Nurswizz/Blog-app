import style from "./Profile.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  return (
    <div className={style.profile}>
        <Navbar />
        <div className={style.content}>
            <h1>Profile</h1>
            <p>Profile content</p>
        </div>
    </div>
  );
};

export default Profile;
