const mysql = require('mysql');
const Bluebird = require('bluebird');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
const db = Bluebird.promisifyAll(connection);

const getReviews = (pid) => (
  Promise.all([db.queryAsync(`SELECT *, FORMAT(rating, 1) as rating, FORMAT(play_experience, 1) as play_experience, FORMAT(difficulty_level, 1) as difficulty_level, FORMAT(money_value, 1) as money_value FROM reviews WHERE pid=${pid}`),
    db.queryAsync(`SELECT *, FORMAT(avg_score, 2) as avg_score, FORMAT(play_experience_avg, 2) as play_experience_avg, FORMAT(difficulty_level_avg, 2) as difficulty_level_avg, FORMAT(money_value_avg, 2) as money_value_avg, FORMAT(five_star_percentage, 2) as five_star_percentage, FORMAT(four_star_percentage, 2) as four_star_percentage, FORMAT(three_star_percentage, 2) as three_star_percentage, FORMAT(two_star_percentage, 2) as two_star_percentage, FORMAT(one_star_percentage, 2) as one_star_percentage FROM products WHERE pid=${pid}`)])
);

//(pid, avg_score, total_reviews, recommendation_percentage, five_star, four_star, three_star, two_star, one_star, FORMAT(play_experience_avg, 2) as play_experience_avg, FORMAT(difficulty_level_avg, 2) as difficulty_level_avg, FORMAT(money_value_avg, 2) as money_value_avg, FORMAT(five_star_percentage, 2) as five_star_percentage, FORMAT(four_star_percentage, 2) as four_star_percentage, FORMAT(three_star_percentage, 2) as three_star_percentage, FORMAT(two_star_percentage, 2) as two_star_percentage, FORMAT(one_star_percentage, 2) as one_star_percentage)

//   const allTables = {};
//   db.queryAsync('SELECT * FROM reviews')
//     .then((reviews) => {
//       allTables.reviews = reviews;
//       return db.queryAsync('SELECT * FROM products');
//     })
//     .then((products) => {
//       allTables.products = products;
//       console.log(allTables)
//       return allTables;
//     })
//     .catch(() => console.error('Error when Querying'));
// };

const vote = (voteType, id, toggle) => (
  toggle === 'N' ? db.queryAsync(`UPDATE reviews SET ${voteType} = ${voteType} - 1 WHERE id = ${id}`) : db.queryAsync(`UPDATE reviews SET ${voteType} = ${voteType} + 1 WHERE id = ${id}`))
  .then(() => db.queryAsync('SELECT * FROM reviews'))
  .catch(() => console.error('errored at the vote query'));

module.exports = {
  getReviews,
  vote,
};
