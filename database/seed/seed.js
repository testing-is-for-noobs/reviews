const faker = require('faker');
const mysql = require('mysql');

const mysqlConfig = require('../config.js');

const connection = mysql.createConnection(mysqlConfig);

for (let i = 0; i < 2000; i++) {
  let reviewData = {};
  // Generate random data
  reviewData.date = faker.date.recent(60);
  reviewData.rating = faker.random.number({ min: 1, max: 5 });
  reviewData.review_header = faker.company.catchPhrase();
  reviewData.username = faker.internet.userName();
  reviewData.age_range = faker.random.arrayElement(['14-18', '19-24', '25-34', '35-44', '45-54', '55-64', '65 Or Older']);
  reviewData.recommendationYN = faker.random.arrayElement(['Y', 'N']);
  reviewData.purchased_for = faker.random.arrayElement(['Son', 'Daughter', 'Grandson', 'Granddaughter', "Friend or Family Member's Child", 'Friend', 'Self']);
  reviewData.review = faker.lorem.paragraphs(faker.random.number({ min: 1, max: 5 }));
  reviewData.upvotes = faker.random.number(10);
  reviewData.downvotes = faker.random.number(7);
  reviewData.play_experience = faker.random.arrayElement([faker.random.number({ min: 1, max: 5 }), null]);
  reviewData.difficulty_level = faker.random.arrayElement([faker.random.number({ min: 1, max: 5 }), null]);
  reviewData.money_value = faker.random.arrayElement([faker.random.number({ min: 1, max: 5 }), null]);
  reviewData.build_hrs = faker.random.arrayElement([faker.random.number({ min: 1, max: 4 }), null]);
  reviewData.build_mins = faker.random.arrayElement([faker.random.number({ min: 1, max: 59 }), null]);
  reviewData.building_experience = faker.random.arrayElement(['Novice LEGO Builder', 'Intermediate LEGO Builder', 'Advanced LEGO Builder', 'Expert LEGO Builder', null]);
  reviewData.pid = faker.random.number(100);

  connection.query(`INSERT INTO reviews SET ?`, reviewData);
}
connection.end();
