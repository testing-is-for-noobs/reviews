const express = require('express');
const PostDB = require('../pgdatabase');
//const CasDB = require('../casdatabase');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:pid/',(req, res) => {
  const pid = req.params.pid;
  PostDB.getReviews(pid, (err,data) =>{
    if(err) {
      res.status(500).send(err);
    }else {
      res.status(200).send(data);
    }
  });
})

// app.post('/reviews', (req, res) => {
//   const review = req.body;
//   PostDB.insertReview(review, req, res);
// })

// app.get('/reviews/:pid/', (req, res) => {
//   db.getReviews(req.params.pid).then(([reviews, products]) => {
//     const data = { reviews, products };
//     res.status(202).send(data);
//   }).catch((err) => {
//     res.status(404).send(err);
//   });
// });

// app.post('/reviews/:pid', (req, res) => {
//   db.createReview(req.params.pid, req.body).then((data) => {
//     console.log(req.body);
//     res.status(201).send(data);
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

// app.delete('/reviews/:pid/:id', (req, res) => {
//   res.status(202).send('delete request');
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
