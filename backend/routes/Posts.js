const express = require("express");

const router = express.Router();
const { createPost } = require("../controllers/PostsControllers");

router.post("/", createPost);

module.exports = router;
