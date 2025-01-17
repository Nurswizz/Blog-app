import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import style from "./Home.module.css";


const Home = () => {
  return (
    <div className={style.home}>
      <Navbar />
      <h1>Posts</h1>
      <Posts />
    </div>
  );
};

export default Home;
