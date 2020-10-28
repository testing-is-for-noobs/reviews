DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

DROP TABLE  IF EXISTS names;

CREATE TABLE names (
    uid INT PRIMARY KEY,
    user_name VARCHAR(50),
    age_range VARCHAR(50)
);

DROP TABLE  IF EXISTS review;

CREATE TABLE review (
    pid INT,
    rid INT PRIMARY KEY, 
    user_id INT,
    create_date TEXT NOT NULL,
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
    FOREIGN KEY (user_id) REFERENCES names (uid)
);

COPY names FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresUsers.csv' WITH DELIMITER ',' CSV HEADER;
COPY review FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresReview10M.csv' WITH DELIMITER '|' CSV HEADER;
--COPY review100 FROM '/Users/tingling/Desktop/SDC/reviews/datagenerator/postgresReview100.csv' WITH DELIMITER '|' CSV HEADER;
--COPY (SELECT r.pid, r.rid, u.user_name, u.age_range, r.create_data, r.review_title, r.recommendationYN, r.purchased_for, r.rating,r.review, r.upvotes, r.downvotes,r.play_experience, r.difficulty_level,r.money_value, r.build_hrs, r.build_mins, r.building_experience from review as r, names as u where u.id = r.user_id) TO '/Users/tingling/Desktop/SDC/reviews/datagenerator/casReveiw.csv' WITH DELIMITER '|' CSV HEADER;
--COPY (SELECT r.id, stores.name, stores.address, stores.city, stores.state, stores.zip, stores.phone, stores.details, inventory.product_id, inventory.inventory FROM stores INNER JOIN inventory ON stores.id = inventory.store_id) TO 'C:\Users\jonfu86\work\SDC\product-details/bridge.csv' WITH CSV DELIMITER ',' HEADER;



ALTER TABLE review
ALTER COLUMN play_experience TYPE INT USING CASE WHEN play_experience ='null' THEN null ELSE play_experience::integer END;
ALTER COLUMN difficulty_level TYPE INT USING CASE WHEN difficulty_level ='null' THEN null ELSE difficulty_level::integer END;
ALTER COLUMN money_value TYPE INT USING CASE WHEN money_value ='null' THEN null ELSE money_value::integer END;
ALTER COLUMN build_hrs TYPE INT USING CASE WHEN build_hrs ='null' THEN null ELSE build_hrs::integer END;
ALTER COLUMN build_mins TYPE INT USING CASE WHEN build_mins ='null' THEN null ELSE build_mins::integer END;
ALTER COLUMN building_experience  TYPE VARCHAR USING CASE WHEN building_experience  ='null' THEN null ELSE building_experience ::VARCHAR(50) END;

--Summary

CREATE TABLE summary AS (
    SELECT 
        pid,
        ROUND(avg(rating),2) AS avg_score, 
        COUNT(rid) AS total_reviews,
        ROUND (100* (SUM(CASE WHEN recommendationyn = 'Y' THEN 1 ELSE 0 END) / COUNT(rid)::float))AS percent_total, 
        SUM(CASE WHEN rating =5 THEN 1 ELSE 0 END) AS five_star,
        ROUND (100* (SUM(CASE WHEN rating =5 THEN 1 ELSE 0 END)/ COUNT(rid)::float)) AS five_star_percentage,
        SUM(CASE WHEN rating =4 THEN 1 ELSE 0 END) AS four_star, 
        ROUND (100* (SUM(CASE WHEN rating =4 THEN 1 ELSE 0 END)/ COUNT(rid)::float)) AS four_star_percentage,
        SUM(CASE WHEN rating =3 THEN 1 ELSE 0 END) AS three_star, 
        ROUND (100* (SUM(CASE WHEN rating = 3 THEN 1 ELSE 0 END)/ COUNT(rid)::float)) AS three_star_percentage,
        SUM(CASE WHEN rating =2 THEN 1 ELSE 0 END) AS two_star,
        ROUND (100* (SUM(CASE WHEN rating = 2 THEN 1 ELSE 0 END)/ COUNT(rid)::float)) AS two_star_percentage,
        SUM(CASE WHEN rating =1 THEN 1 ELSE 0 END) AS one_star,
        ROUND (100* (SUM(CASE WHEN rating = 1 THEN 1 ELSE 0 END)/ COUNT(rid)::float)) AS one_star_percentage,
        ROUND(AVG(play_experience),2) AS play_experience_avg,
        ROUND(AVG(difficulty_level),2) AS difficulty_level_avg, 
        ROUND(AVG(money_value),2) AS money_value_avg
    FROM review GROUP BY pid
);


COPY summary TO '/Users/tingling/Desktop/SDC/reviews/datagenerator/casSummary.csv' WITH DELIMITER '|' CSV HEADER;