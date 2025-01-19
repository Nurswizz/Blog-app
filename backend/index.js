require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/userRouter");
const postRoutes = require("./routes/postRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
