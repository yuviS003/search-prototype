const { DataTypes, Sequelize, STRING } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    postName: {
      type: STRING,
      allowNull: false,
    },
    postDescription: {
      type: STRING,
      allowNull: false,
    },
    url: {
      type: STRING,
      allowNull: false,
    },
    tags: {
      type: STRING,
      allowNull: false,
    },
  };
  return sequelize.define("SearchEngine", attributes);
}
