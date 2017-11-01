DROP DATABASE dumpling_app;
CREATE DATABASE dumpling_app;

CREATE TABLE IF NOT EXISTS restaurants (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  lat INT,
  lng INT,
  image VARCHAR(1000),
  website VARCHAR(1000),
  description VARCHAR(1000),
  ranking_id INTEGER REFERENCES ranking
);

CREATE TABLE IF NOT EXISTS ranking (
  id BIGSERIAL PRIMARY KEY,
  ranking INT
)
