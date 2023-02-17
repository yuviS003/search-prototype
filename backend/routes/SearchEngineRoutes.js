const express = require("express");
const router = express.Router();
const {
  getSearchResults
} = require("../controllers/SearchControllers");

router.post("/", getSearchResults);

module.exports = router;
