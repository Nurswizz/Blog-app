import { Post } from "../../components/Post/Post";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <div className={style.home}>
      <Navbar />
      <h1>Posts</h1>
      <Stack
        spacing={5}
        direction={"column"}
        sx={{ maxWidth: "800px", margin: "auto" }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </div>
  );
};

export default Home;
