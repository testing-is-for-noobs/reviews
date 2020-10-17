const express = require('express');
const db = require('../database');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:pid/', (req, res) => {
  db.getReviews(req.params.pid).then(([reviews, products]) => {
    const data = { reviews, products };
    res.status(202).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.post('/reviews/:pid', (req, res) => {
  db.createReview(req.params.pid, req.body).then((data) => {
    console.log(req.body);
    res.status(201).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.put('/reviews/:pid/vote/:voteType/:id/:toggle', (req, res) => {
  db.vote(req.params.voteType, req.params.id, req.params.toggle).then((data) => {
    // send the all the data change later
    res.status(202).send(data);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.delete('/reviews/:pid/:id', (req, res) => {
  res.status(202).send('delete request');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
