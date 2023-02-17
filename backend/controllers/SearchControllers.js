const db = require("../helpers/db");
const getSearchResults = async (req, res) => {
  try {
    const { query } = req.body;

    let searchResults = [];
    let parsedResult = [];

    const allPosts = await db.SearchEngine.findAll();
    allPosts.forEach((element) => {
      parsedResult.push({
        ...element.dataValues,
        tags: element.dataValues.tags.split(","),
      });
    });

    if (parsedResult.length) {
      parsedResult.forEach((element) => {
        if (element.tags.some((elem) => query.includes(elem))) {
          searchResults.push(element);
        }
      });
      if (searchResults.length) res.status(200).json(searchResults);
      else
        res
          .status(404)
          .json({ message: "No search results found for this query" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getSearchResults };
