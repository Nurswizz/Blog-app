import style from "./Post.module.css";

export const Post = () => {
  return (
    <div className={style.post}>
        <img src="https://placehold.jp/150x300.png"></img>
        <div className={style.content}>
            <h2>Post title</h2>
            <p>Post content</p>
        </div>
    </div>
  );
};
