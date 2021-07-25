const { Pool } = require("pg");
// require("dotenv").config({ path: "../../../.env" });

const db = new Pool({
  host: "ec2-3-224-7-166.compute-1.amazonaws.com",
  database: "dcl8ms23tsb5fs",
  user: "cbyrnnmpcdlcqt",
  port: "5432",
  password: "111c00191b82c66c498e9deaadec7d0e880f323f104b8911c0a86a0b63246ee9",
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,
  min: 1,
});

module.exports = db;
