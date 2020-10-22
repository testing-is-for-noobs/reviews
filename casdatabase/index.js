const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['localhost']});

const getReviews = (pid, callback) => {
    //console.log('getting reviews');
    const query = 'SELECT * FROM review100 WHERE pid= ?';
    client.execute(query, [pid])
        .then(result => callback(null, result.rows));
};

module.exports = {
    getReviews 
}