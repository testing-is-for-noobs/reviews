const mysql = require('mysql');
const Bluebird = require('bluebird');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
const db = Bluebird.promisifyAll(connection);

const getReviews = (pid) => (
  Promise.all([db.queryAsync(`SELECT * FROM reviews WHERE pid=${pid}`), db.queryAsync(`SELECT * FROM products WHERE pid=${pid}`)])
);
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
