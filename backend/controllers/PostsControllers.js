const db = require("../helpers/db");

const createPost = async (req, res) => {
  try {
    const { postName, postDescription, url, tags } = req.body;
    const duplicate = await db.SearchEngine.findOne({
      where: {
        postName,
        postDescription,
        url,
        tags: tags.join(","),
      },
    });
    if (duplicate) res.status(401).json({ message: "already exist" });
    const result = await db.SearchEngine.create({
      postName,
      postDescription,
      url,
      tags: tags.join(","),
    });
    res
      .status(200)
      .json({ message: "Successfully created", newPostId: result.id });
  } catch (err) {
    console.log(err);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const result = await db.SearchEngine.findAll();

    const parsedResult = [];

    result.forEach((element) => {
      parsedResult.push({
        ...element.dataValues,
        tags: element.dataValues.tags.split(","),
      });
    });

    res.status(200).json(parsedResult);
  } catch (err) {
    console.log(err);
  }
};

const deleteAllPosts = async (req, res) => {
  try {
    const result = await db.SearchEngine.destroy({
      truncate: true,
    });
    res.status(200).json({ message: "All posts deletes successfully", result });
  } catch (err) {
    console.log(err);
  }
};

const getAllPostByUrl = async (req, res) => {
  try {
    const url = req.params.url;
    const result = await db.SearchEngine.findAll({ where: { url } });
    if (!result.length)
      res.status(404).json({ message: "No matching results found" });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost, deleteAllPosts, getAllPosts, getAllPostByUrl };
