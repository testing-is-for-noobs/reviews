DROP DATABASE IF EXISTS reviews;

CREATE DATABASE IF NOT EXISTS reviews;
USE reviews;

CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rating INT NOT NULL,
  date DATE NOT NULL,
  review_header VARCHAR(100) NOT NULL,
  username VARCHAR(50),
	age_range VARCHAR(50),
	recommendationYN CHAR(1) NOT NULL,
	purchased_for VARCHAR(50) NOT NULL,
	review VARCHAR(1000) NOT NULL,
	upvotes INT DEFAULT 0,
	downvotes INT DEFAULT 0,
	play_experience INT,
	difficulty_level INT,
  money_value INT,
  build_hrs INT,
  build_mins INT,
  building_experience VARCHAR(50),
  pid INT
);

-- INSERT INTO reviews VALUES (1, 4, '2020-09-01', "Best Toy", "xLegoMaster827x", "19-24", "Y", "myself", "I got this for my own birthday and now it has become my best friend XOXO", 0, 0, 5, 3, 2, 3, 21, "Expert", 8);