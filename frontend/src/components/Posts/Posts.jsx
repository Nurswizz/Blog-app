import style from "./Posts.module.css";

import { Stack } from "@mui/material";
import Post from "../Post/Post";

const Posts = () => {
  return (
      <Stack spacing={5} direction={"column"} className={style.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
  );
};
export default Posts;
