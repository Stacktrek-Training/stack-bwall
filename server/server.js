const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//get all users_favorites
app.get('/users_favorites',async (req, res) => {
  try {
    const users_favorites = await pool.query("SELECT * FROM users_favorites");
    res.json(users_favorites.rows);
  } catch (err) {
    console.error(err.message);
  }
});



app.listen(5000, () => {
    console.log("server has started on port 5000");
  });