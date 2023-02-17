const db = require("../helpers/db");
const getSearchResults = async (req, res) => {
  try {
    const { tags } = req.body;

    let parsedResult = [];

    const result = await db.SearchEngine.findAll();
    result.forEach((element) => {
      parsedResult.push({
        ...element.dataValues,
        tags: element.dataValues.tags.split(","),
      });
    });

    if (parsedResult.length) {
      let searchResults = [];
      parsedResult.forEach((element) => {
        if (element.tags.some((elem) => tags.includes(elem))) {
          searchResults.push(element);
        }
      });
      if (searchResults.length) res.status(200).json(searchResults);
    }

    res.status(404).json({ message: "No results found" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getSearchResults };
