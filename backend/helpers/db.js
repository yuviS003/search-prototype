const config = require("../configs/databaseConfig.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database, dialect } = config.database;
  try {
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, {
      host,
      dialect,
    });

    //export connection object
    db.sequelize = sequelize;

    // init models and add them to the exported db object
    db.SearchEngine = require("../models/SearchEngine")(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
  } catch (e) {
    console.error(
      "Error connecting to the database: \n",
      e,
      "\nPlease check the database server configuration and restart the node server"
    );
  }
}
