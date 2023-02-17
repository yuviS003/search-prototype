require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./helpers/db");
const searchRoutes = require("./routes/SearchEngineRoutes");
const postRoutes = require("./routes/Posts");

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/search", searchRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
