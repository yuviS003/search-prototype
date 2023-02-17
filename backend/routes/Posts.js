const express = require("express");

const router = express.Router();
const {
  createPost,
  getAllPosts,
  deleteAllPosts,
  getAllPostByUrl,
} = require("../controllers/PostsControllers");

router.post("/", createPost);
router.get("/", getAllPosts);
router.post("/fetchByUrl", getAllPostByUrl);
router.delete("/deleteAll", deleteAllPosts);

module.exports = router;
