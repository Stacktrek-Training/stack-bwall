const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get('/users', (req, res) => {
    const query = 'SELECT users.id, users.first_name, users.last_name, SUM(points.points_per_event) AS total_points FROM users JOIN events ON users.id = events.user_id JOIN points ON events.point_id = points.point_id GROUP BY users.id ORDER BY total_points DESC';
    pool.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.json(result.rows);
      }
    });
  });

app.listen(5000, () => {
    console.log("server has started on port 5000");
  });