DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

-- CREATE TABLE names (
--     uid INT PRIMARY KEY,
--     user_name VARCHAR(50),
--     age_range VARCHAR(50)
-- );

DROP TABLE  IF EXISTS review100;

CREATE TABLE review100 (
    rid INT PRIMARY KEY,
    pid INT,
    user_name VARCHAR(50),
    age_range VARCHAR(50),
    create_data TEXT NOT NULL,
    review_title VARCHAR(100) NOT NULL,    
    recommendationYN VARCHAR(1) NOT NULL,
    purchased_for VARCHAR(50) NOT NULL,
    rating INT,
    review TEXT NOT NULL,
    upvotes INT ,
    downvotes INT,
    play_experience VARCHAR(50),
    difficulty_level VARCHAR(50),
    money_value VARCHAR(50),
    build_hrs VARCHAR(50), 
    build_mins VARCHAR(50),
    building_experience VARCHAR(50)
);

-- COPY names FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresUsers.csv' WITH DELIMITER ',' CSV HEADER;
--COPY review FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresReviews.csv' WITH DELIMITER '|' CSV HEADER;
COPY review100 FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresReview100.csv' WITH DELIMITER '|' CSV HEADER;