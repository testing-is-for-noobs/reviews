const { Pool } = require('pg');

const pool = new Pool({
  user: 'tingling',
  //host: '54.176.45.83',
  database: 'reviews',
  //password: 'root',
  //port: 5432,
});

pool.connect()
  .then(() => console.log('Postgre Connected'))
  .catch((err) => console.log(err));

// =======GET=======

const getReviews = (pid, callback) => {
  pool.query(`SELECT r.pid, u.user_name, u.age_range, r.create_date, r.review_title, r.recommendationyn, r.purchased_for, r.rating,r.review, r.upvotes, r.downvotes,r.play_experience, r.difficulty_level,r.money_value, r.build_hrs, r.build_mins, r.building_experience FROM review AS r, names AS u WHERE r.user_id = u.uid AND r.pid =${pid} order by rid desc limit 10`)
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

const getSummary = (pid, callback) => {
  pool.query(`SELECT * FROM summary WHERE pid= ${pid}`)
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

// =======POST=======

const insertReviews = (newReview, callback) => {
  const {
    pid,
    rid,
    user_id,
    create_date,
    review_title,
    recommendationyn,
    purchased_for,
    rating,
    review,
    upvotes,
    downvotes,
    play_experience,
    difficulty_level,
    money_value,
    build_hrs,
    build_mins,
    building_experience
  } = newReview;
  const query = 'INSERT INTO review (pid, rid, user_id, create_data, review_title, recommendationyn, purchased_for,rating,review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)';
  pool.query(query, [pid, rid,user_id, create_date, review_title, recommendationyn, purchased_for, rating, review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience])
    .then((result) => callback(null, result))
    .catch((err) => callback(err));
};

// ========UPDATE=======
const updateReviews = (pid, rid, updateReview, callback) => {
  let query = ['UPDATE review', 'SET'];
  const set = [];
  const values = [];
  Object.keys(updateReview).forEach((column, i) => {
    set.push(`${column} = $${i + 1}`);
  });
  Object.values(updateReview).forEach((value) => {
    values.push(value);
  });
  query.push(set.join(','));
  query.push(`WHERE pid =${pid} AND rid =${rid}`);
  query = query.join(' ');

  pool.query(query, values)
    .then(() => callback(null))
    .catch((err) => callback(err));
};

const deleteReviews = (pid, rid, callback) => {
  const query = 'DELETE FROM review WHERE pid =$1 AND rid = $2';
  pool.query(query, [pid, rid])
    .then(() => callback(null))
    .catch((err) => callback(err));
};

module.exports = {
  getReviews,
  insertReviews,
  getSummary,
  updateReviews,
  deleteReviews,
};
