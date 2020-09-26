const express = require('express');
const db = require('../database');

const app = express();
const port = 3000;

app.get('/reviews', (req, res) => {
  db.getReviews().then((data) => {
    res.status(202).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.put('/reviews/vote/:voteType/:id/:toggle', (req, res) => {
  db.vote(req.params.voteType, req.params.id, req.params.toggle).then((data) => {
    res.status(202).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
