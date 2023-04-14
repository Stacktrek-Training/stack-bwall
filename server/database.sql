CREATE DATABASE stackbwall;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

--example users
-- INSERT INTO
--     users (id, first_name, last_name, email, password)
-- VALUES
-- ('kapid', 'kashi', 'kapid@gmail.com', 'kapidkashi');

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    point_id INTEGER NOT NULL REFERENCES points(point_id),
    date VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE points (
    point_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    points_per_event INTEGER
);