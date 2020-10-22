DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

DROP TABLE  IF EXISTS names;

CREATE TABLE names (
    id INT PRIMARY KEY,
    user_name VARCHAR(50),
    age_range VARCHAR(50)
);

DROP TABLE  IF EXISTS review;

CREATE TABLE review (
    pid INT,
    rid INT PRIMARY KEY, 
    user_id INT,
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
    building_experience VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES names (id)
);

COPY names FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresUsers.csv' WITH DELIMITER ',' CSV HEADER;
COPY review FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresReview10M.csv' WITH DELIMITER '|' CSV HEADER;
--COPY review100 FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresReview100.csv' WITH DELIMITER '|' CSV HEADER;
COPY (SELECT r.pid, r.rid, u.user_name, u.age_range, r.create_data, r.review_title, r.recommendationYN, r.purchased_for, r.rating,r.review, r.upvotes, r.downvotes,r.play_experience, r.difficulty_level,r.money_value, r.build_hrs, r.build_mins, r.building_experience from review as r, names as u where u.id = r.user_id) TO '/Users/tingling/Desktop/SDC/reviews/datagenerator/casReveiw.csv' WITH DELIMITER '|' CSV HEADER;
--COPY (SELECT r.id, stores.name, stores.address, stores.city, stores.state, stores.zip, stores.phone, stores.details, inventory.product_id, inventory.inventory FROM stores INNER JOIN inventory ON stores.id = inventory.store_id) TO 'C:\Users\jonfu86\work\SDC\product-details/bridge.csv' WITH CSV DELIMITER ',' HEADER;