const express = require("express");
const postController = require("../controllers/postController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/create", verifyToken, postController.create);
router.get("/getUserPosts", verifyToken, postController.getPostsOfUser);  

module.exports = router;
