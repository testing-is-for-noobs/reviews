DROP KEYSPACE IF EXISTS review;

CREATE KEYSPACE review WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : 3};

USE review;

CREATE TABLE review.review (
  pid int,
  rid int,
  user_name text,
  age_range text,
  create_date text,
  review_title text,
  recommendationYN text, 
  purchased_for text,
  rating int,
  review text,
  upvotes int,
  downvotes int,
  play_experience int,
  difficulty_level int,
  money_value int,
  build_hrs int,
  build_mins int,
  building_experience text,
  PRIMARY KEY((pid), rid) 
  );

  CREATE TABLE review.summary (
    pid int,
    avg_score decimal,
    total_reviews int,
    percent_total int, 
    five_star int,
    five_star_percentage int,
    four_star int, 
    four_star_percentage int,
    three_star int, 
    three_star_percentage int,
    two_star int,
    two_star_percentage int,
    one_star int,
    one_star_percentage int,
    play_experience_avg decimal,
    difficulty_level_avg decimal, 
    money_value_avg decimal,
  PRIMARY KEY((pid),total_reviews) 
  );


COPY review.review (pid, rid, user_name, age_range,create_date, review_title, recommendationYN, purchased_for,rating,review,upvotes,downvotes,play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience) FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/casReveiw.csv' WITH DELIMITER = '|' AND HEADER=TRUE;
COPY review.summary(pid, avg_score, total_reviews,percent_total, five_star,five_star_percentage,four_star, four_star_percentage,three_star, three_star_percentage,two_star,two_star_percentage,one_star,one_star_percentage,play_experience_avg,difficulty_level_avg, money_value_avg) FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/casSummary.csv' WITH DELIMITER = '|' AND HEADER=TRUE;
-- CREATE KEYSPACE review WITH replication =
--   {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 3};

-- CREATE TABLE review.product (
--   prodcut_id text,
--   name text,
--   PRIMARY KEY (prodcut_id)
--   WITH comment = ‘Q1. Find product’
--   AND CLUSTERING ORDER BY (prodcut_id ASC) ;

-- CREATE TABLE review.reviews (
--   id text PRIMARY KEY,
--   create_date date,
--   review_title text,
--   recommendationYN text, 
--   purchased_for text,
--   review text,
--   upvotes smallint,
--   downvotes smallint,
--   play_experience smallint,
--   difficulty_level smallint,
--   money_value smallint,
--   build_hrs smallint,
--   build_mins smallint,
--   building_experience text )
--   WITH comment = ‘Q2. Find reviews of a product’;

-- CREATE TABLE review.user (
--   uid text,
--   full_name text,
--   age_range text
--   PRIMARY KEY (uid )
--   WITH comment = Q3. Find user writes the review’;
