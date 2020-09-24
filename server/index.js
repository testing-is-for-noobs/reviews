const express = require('express');
const axios = require('axios');
const db = require('../database');

const app = express();
const port = 3000;



app.get('/reviews', (req, res) => {

  db.getReviews.then((data) => {
    console.log(data);
    res.status(202).send(data);
  }).catch( (err) => {
    res.status(404).send(err);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})