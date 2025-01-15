import { Post } from "../../components/Post/Post"  
import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <Navbar />
      <div className={style.posts}>
        <h1>Posts</h1>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
