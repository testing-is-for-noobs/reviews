const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'review',
});

// =======GET=======

const getReviews = (pid, callback) => {
  const query = 'SELECT * FROM review WHERE pid= ? order by rid desc limit 10';
  client.execute(query, [pid], { prepare: true })
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

const getSummary = (pid, callback) => {
  const query = 'SELECT * FROM summary WHERE pid= ?';
  client.execute(query, [pid], { prepare: true })
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

// =======POST=======
const insertReviews = (newReview, callback) => {
  const {
    pid,
    rid,
    create_date,
    review_title,
    recommendationYN,
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
  const query = 'INSERT INTO review (pid, rid, create_date, review_title, recommendationYN, purchased_for,rating,review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  client.execute(query, [pid, rid,create_date, review_title, recommendationYN, purchased_for, rating, review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience], { prepare: true })
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

// ========UPDATE=======
const updateReviews = (pid, rid, updateReview, callback) => {
  let query = ['UPDATE review', 'SET'];
  const set = [];
  const values = [];
  Object.keys(updateReview).forEach((column) => {
    set.push(`${column} = ?`);
  });
  Object.values(updateReview).forEach((value) => {
    values.push(value);
  });
  query.push(set.join(','));
  query.push(`WHERE pid =${pid} AND rid =${rid}`);
  query = query.join(' ');

  client.execute(query, values, { prepare: true })
    .then(() => callback(null))
    .catch((err) => callback(err));
};

const deleteReviews = (pid, rid, callback) => {
  const query = 'DELETE FROM review WHERE pid =? AND rid = ?';
  client.execute(query, [pid, rid], { prepare: true })
    .then(() => callback(null))
    .catch((err) => callback(err));
};

module.exports = {
  getReviews,
  insertReviews,
  updateReviews,
  deleteReviews,
  getSummary,
};
