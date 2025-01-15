import style from "./Post.module.css";
import { useNavigate } from "react-router-dom";

export const Post = () => {
  const navigate = useNavigate();
  return (
    <div
      className={style.post}
      onClick={() => {
        navigate("/post");
      }}
    >
      <img src="https://placehold.jp/200x300.png"></img>
      <div className={style.content}>
        <h2>Elon Musk’s Net Worth Drops $5 Billion on Tesla Trouble</h2>
        <p>
          Elon Musk’s net worth has dropped $5.4 billion this year, mostly due
          to trouble at Tesla Inc. (NASDAQ: TSLA). His total is now $427
          billion, which puts him miles ahead of Jeff Bezos, who has a net worth
          of $237 billion, according to the Bloomberg Billionaire …
        </p>
        <p>Author: Author&apos;s Name and Surname</p>
        <p style={{ color: "rgb(222, 222, 222)" }}>24 January 2024</p>
      </div>
    </div>
  );
};
