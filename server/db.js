const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kapidkashi",
  host: "localhost",
  port: 5432,
  database: "stackbwall",
});

module.exports = pool;
