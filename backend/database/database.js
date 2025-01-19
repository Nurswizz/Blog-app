require("dotenv").config();

const { Sequelize } = require("sequelize-cockroachdb");

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  console.error("DATABASE_URL is not set in the environment variables.");
  process.exit(1); 
}

const sequelize = new Sequelize(DB_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1); // Exit the process on failure
  });

module.exports = sequelize;
