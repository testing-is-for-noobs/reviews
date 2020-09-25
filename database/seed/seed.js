const faker = require('faker');
const mysql = require('mysql');

const mysqlConfig = require('../config.js');

const connection = mysql.createConnection(mysqlConfig);

for (let i = 0; i < 1000; i++) {
  //Generate random data
  let date = faker.date.recent(60);
  let rating = faker.random.number({min:1, max:5});
  let review_header = faker.company.catchPhrase();
  let username = faker.internet.userName();
  let age_range = faker.random.arrayElement(['14-18', '19-24', '25-34', '35-44', '45-54', '55-64', '65 Or Older', null]);
  let recommendationYN = faker.random.arrayElement(['Y','N']);
  let purchased_for = faker.random.arrayElement(['Son', 'Daughter', 'Grandson', 'Granddaughter', "Friend or Family Member's Child", 'Friend', 'Self']);
  let review = faker.lorem.paragraph();
  let upvotes = faker.random.number(10);
  let downvotes = faker.random.number(7);
  let play_experience = faker.random.arrayElement([faker.random.number({min:1, max:5}), null]);
  let difficulty_level = faker.random.arrayElement([faker.random.number({min:1, max:5}), null]);
  let money_value = faker.random.arrayElement([faker.random.number({min:1, max:5}), null]);
  let build_hrs = faker.random.arrayElement([faker.random.number({min:1, max:4}), null]);
  let build_mins = faker.random.arrayElement([faker.random.number({min:1, max:59}), null]);
  let building_experience = faker.random.arrayElement(['Novice LEGO Builder', 'Intermediate LEGO Builder', 'Advanced LEGO Builder', 'Expert LEGO Builder', null]);
  let pid = faker.random.number(100);

  // console.log({
  //   date, rating, review_header, username, age_range, recommendationYN, purchased_for, review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience, pid
  // })
  connection.query(`INSERT INTO reviews (date, rating, review_header, username, age_range, recommendationYN, purchased_for, review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience, pid)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [date, rating, review_header, username, age_range, recommendationYN, purchased_for, review, upvotes, downvotes, play_experience, difficulty_level, money_value, build_hrs, build_mins, building_experience, pid]);
}
connection.end();