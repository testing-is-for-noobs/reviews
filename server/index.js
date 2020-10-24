const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const PostDB = require('../pgdatabase');
const CasDB = require('../casdatabase');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:pid/', (req, res) => {
  const { pid } = req.params;
  CasDB.getReviews(pid, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/reviews/summary/:pid/', (req, res) => {
  const { pid } = req.params;
  CasDB.getSummary(pid, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/reviews', (req, res) => {
  console.log(req.body);
  const review = req.body;
  CasDB.insertReviews(review, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('POSTED');
    }
  });
});

app.put('/reviews/:pid/:rid', (req, res) => {
  const { pid, rid } = req.params;
  const update = req.body;
  CasDB.updateReviews(pid, rid, update, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('UPDATED');
    }
  });
});

app.delete('/reviews/:pid/:rid', (req, res) => {
  const { pid, rid } = req.params;
  CasDB.deleteReviews(pid, rid, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('DELETED');
    }
  });
});

// app.get('/reviews/:pid/', (req, res) => {
//   db.getReviews(req.params.pid).then(([reviews, products]) => {
//     const data = { reviews, products };
//     res.status(202).send(data);
//   }).catch((err) => {
//     res.status(404).send(err);
//   });
// });

// app.put('/reviews/:pid/vote/:voteType/:id/:toggle', (req, res) => {
//   db.vote(req.params.voteType, req.params.id, req.params.toggle).then((data) => {
//     // send the all the data change later
//     res.status(202).send(data);
//   }).catch((err) => {
//     res.status(404).send(err);
//   });
// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
