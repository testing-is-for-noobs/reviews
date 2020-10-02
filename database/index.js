const mysql = require('mysql');
const Bluebird = require('bluebird');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
const db = Bluebird.promisifyAll(connection);

const getReviews = (pid) => (
  Promise.all([db.queryAsync(`SELECT * FROM reviews WHERE pid=${pid}`),
    db.queryAsync(`SELECT * FROM products WHERE pid=${pid}`)])
);

//(pid, avg_score, total_reviews, recommendation_percentage, five_star, four_star, three_star, two_star, one_star, FORMAT(play_experience_avg, 2), FORMAT(difficulty_level_avg, 2), FORMAT(money_value_avg, 2), FORMAT(five_star_percentage, 2), FORMAT(four_star_percentage, 2), FORMAT(three_star_percentage, 2), FORMAT(two_star_percentage, 2), FORMAT(one_star_percentage, 2))

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
