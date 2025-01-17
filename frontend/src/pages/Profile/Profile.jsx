import style from "./Profile.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";

const Profile = () => {
  return (
    <div className={style.profile}>
      <Navbar />
      <div className={style.content}>
        <h1>Profile</h1>
        <img src="https://placehold.jp/250x250.png" alt="" />
        <h2>Name Surname</h2>
      </div>
      <h1 className={style.h1}>My posts</h1>
      <Posts />
    </div>
  );
};

export default Profile;
