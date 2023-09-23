const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-project", "root", "8879", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
