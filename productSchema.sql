-- CREATE TABLE IF NOT EXISTS product (
--   pid INT PRIMARY KEY,
--   avg_score DECIMAL(1, 2),
--   total_reviews INT,
--   v DECIMAL(1, 2),
--   four_star DECIMAL(1, 2),
--   three_star DECIMAL(1, 2),
--   two_star DECIMAL(1, 2),
--   one_star DECIMAL(1, 2),
--   play_experience_avg DECIMAL(1, 2),
--   difficulty_level_avg DECIMAL(1, 2),
--   money_value_avg DECIMAL(1, 2)
-- );
USE reviews;

CREATE TABLE products AS (SELECT pid, ROUND(avg(rating),2) AS avg_score, count(id) AS total_reviews,
count(if (rating = 5, 1, NULL)) AS five_star, count(if (rating = 4, 1, NULL)) AS four_star,
count(if (rating = 3, 1, NULL)) AS three_star, count(if (rating = 2, 1, NULL)) AS two_star,
count(if (rating = 1, 1, NULL)) AS one_star, ROUND(avg(play_experience),2) AS play_experience_avg,
ROUND(avg(difficulty_level),2) AS difficulty_level_avg, ROUND(avg(money_value),2) AS money_value_avg
FROM reviews
GROUP BY pid);