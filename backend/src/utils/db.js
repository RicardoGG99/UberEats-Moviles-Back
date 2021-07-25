const { Pool } = require("pg");
require("dotenv").config({ path: "../../../.env" });

const db = new Pool({
  host: process.env.HOST,
  database: process.env.DB,
  user: process.env.USER,
  port: process.env.DBPORT,
  password: process.env.PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,
  min: 1,
});

module.exports = db;
