const mysql = require('mysql');
const Bluebird = require('bluebird');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
const db = Bluebird.promisifyAll(connection);

const getReviews = () => db.queryAsync('SELECT * FROM reviews');

const vote = (voteType, id) => db.queryAsync(`UPDATE reviews SET ${voteType} = ${voteType} + 1 WHERE id = ${id}`).then(() => db.queryAsync('SELECT * FROM reviews'));

module.exports = {
  getReviews,
  vote,
};
