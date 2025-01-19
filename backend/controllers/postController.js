const Post = require("../models/post");

const create = async (req, res) => {
  const { title, description, authorId, attachments } = req.body;

  if (!title || !description || !authorId) {
    res.status(400).json({ message: "Please, provide all required fields" });
  }

  try {
    const post = await Post.create({
      title,
      description,
      authorId,
    });
    return res.status(200).json({ message: "Successful! Post was created" });
  } catch (err) {
    console.error(`Error: ${err}`);
    return res.status(500).json({ message: "Server error" });
  }
};

const getPostsOfUser = async (req, res) => {
  const authorId = req.body.authorId;

  if (!authorId) {
    return res.status(400).json({ message: "authorId was not provided" });
  }

  try {
    const posts = await Post.findAll({ where: { authorId } });
    return res.status(200).json({ message: "Successful!", posts });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { create, getPostsOfUser };
