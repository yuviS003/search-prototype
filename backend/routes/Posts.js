const express = require("express");

const router = express.Router();
const {
  createPost,
  getAllPosts,
  deleteAllPosts,
} = require("../controllers/PostsControllers");

router.post("/", createPost);
router.get("/", getAllPosts);
router.delete("/deleteAll", deleteAllPosts);

module.exports = router;
