const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const Bluebird = require("bluebird");


const connection = mysql.createConnection(mysqlConfig);
const db = Bluebird.promisifyAll(connection);

const getReviews = db.queryAsync('SELECT * from reviews');


module.exports = {
  getReviews
}