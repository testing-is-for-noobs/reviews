DROP DATABASE IF EXISTS reviews;

CREATE DATABASE IF NOT EXISTS reviews;
USE reviews;

CREATE TABLE IF NOT EXISTS user (
    uid SERIAL PRIMARY KEY,
    user_name VARCHAR(50),
    age_range VARCHAR(50),
);

CREATE TABLE IF NOT EXISTS review (
    rid SERIAL PRIMARY KEY
    pid SERIAL FOREIGN KEY,
    uid SERIAL FOREIGN KEY,
    date DATE NOT NULL,
    review_header VARCHAR(100) NOT NULL,    
    recommendationYN CHAR(1) NOT NULL,
    purchased_for VARCHAR(50) NOT NULL,
    review VARCHAR(5000) NOT NULL,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    play_experience INT,
    difficulty_level INT,
    money_value INT,
    build_hrs INT, 
    build_mins INT,
    building_experience VARCHAR(50),
);

CREATE TABLE IF NOT EXISTS product (
    pid SERIAL  PRIMARY KEY,
    
);


--or
--CREATE TABLE IF NOT EXISTS reviews {
  --rid int 
  --product_id int
  --full_name varchar
  --age_range varchar
  --date date
  --review_title varchar
  --recommendationYN char(1) 
  --purchased_for varchar
  --review varchar
  --upvotes int
  --downvotes int
  --play_experience int
  --difficulty_level int
  --money_value int
  --build_hrs int
  --build_mins int
  --building_experience varchar
 --}