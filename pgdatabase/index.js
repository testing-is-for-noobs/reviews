const { Pool } = require('pg');

const pool = new Pool({
  user: 'tingling',
  database: 'reviews',
});

pool.connect()
  .then(() => console.log('Postgre Connected'))
  .catch((err) => console.log(err));

// =======GET=======

const getReviews = (pid, callback) => {
  console.log('getting reviews');
  pool.query(`SELECT r.pid, u.user_name, u.age_range, r.create_data, r.review_title, r.recommendationyn, r.purchased_for, r.rating,r.review, r.upvotes, r.downvotes,r.play_experience, r.difficulty_level,r.money_value, r.build_hrs, r.build_mins, r.building_experience FROM review AS r, names AS u WHERE r.user_id = u.id AND r.pid =${pid}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

// =======POST=======

const insertReview = (review, callback) => {
  console.log('inserting reviews');
  const query = `INSERT INTO review (pid, rid, user_id, create_date, review_title, recommendationYN, purchased_for,rating,review,upvotes,downvotes,play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience) VALUES (${review.pid}, ${review.rid}, ${review.user_id}, ${review.create_date}, ${review.review_title}, ${review.recommendationYN}, ${review.purchased_for}, ${review.rating}, ${review.review}, '0', '0', ${review.play_experience}, ${review.difficulty_level},${review.money_value},${review.build_hrs},${review.build_mins},${review.building_experience})`;
//   const reviewData = [
//     review.pid,
//     review.rid,
//     review.user_id,
//     review.create_date,
//     review.review_title,
//     review.recommendationYN,
//     review.purchased_for,
//     review.rating,
//     review.review,
//     0,
//     0,
//     review.play_experience,
//     review.difficulty_level,
//     review.money_value,
//     review.build_hrs,
//     review.build_mins,
//     review.building_experience,
//   ];
  pool.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getReviews,
  insertReview,
};
