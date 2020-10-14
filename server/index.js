const express = require('express');
const db = require('../database');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:pid', (req, res) => {
  db.getReviews(req.params.pid).then(([reviews, products]) => {
    const data = { reviews, products };
    res.status(202).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.post('/reviews/:pid', (req, res) => {
  res.status(201).send('Post request');
});

app.put('/reviews/helpful/:pid', (req, res) => {
  res.status(202).send('Put request');
});

app.delete('/reviews/:pid/:uid', (req, res) => {
  res.status(202).send('Delete request');
});

// app.put('/:pid/reviews/vote/:voteType/:id/:toggle', (req, res) => {
//   db.vote(req.params.voteType, req.params.id, req.params.toggle).then((data) => {
//     res.status(202).send(data);
//   }).catch((err) => {
//     res.status(404).send(err);
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
