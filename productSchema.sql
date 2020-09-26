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

CREATE TABLE products AS (
SELECT pid, ROUND(avg(rating),2) AS avg_score, count(id) AS total_reviews,
ROUND(count(if (recommendationYN = 'Y', 1, NULL))/count(id) * 100, 0) AS recommendation_percentage,
count(if (rating = 5, 1, NULL)) AS five_star, count(if (rating = 4, 1, NULL)) AS four_star,
count(if (rating = 3, 1, NULL)) AS three_star, count(if (rating = 2, 1, NULL)) AS two_star,
count(if (rating = 1, 1, NULL)) AS one_star, ROUND(avg(play_experience),2) AS play_experience_avg,
ROUND(avg(difficulty_level),2) AS difficulty_level_avg, ROUND(avg(money_value),2) AS money_value_avg,
ROUND(count(if (rating = 5, 1, NULL))/count(id), 2) AS five_star_percentage,
ROUND(count(if (rating = 4, 1, NULL))/count(id), 2) AS four_star_percentage,
ROUND(count(if (rating = 3, 1, NULL))/count(id), 2) AS three_star_percentage,
ROUND(count(if (rating = 2, 1, NULL))/count(id), 2) AS two_star_percentage,
ROUND(count(if (rating = 1, 1, NULL))/count(id), 2) AS one_star_percentage
FROM reviews
GROUP BY pid);