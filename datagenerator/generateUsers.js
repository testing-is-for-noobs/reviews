const fs = require('fs');
const faker = require('faker');

const ws = fs.createWriteStream('postgresUsers.csv');

let uid = 0;
const n = 100000;

for (let i = 0; i <= n; i += 1) {
  const header = 'uid, user_name, age_range';
  const user_name = faker.internet.userName();
  const age_range = faker.random.arrayElement(['14-18', '19-24', '25-34', '35-44', '45-54', '55-64', '65 Or Older']);
  const values = `${uid}, ${user_name }, ${age_range}`;
  uid += 1;
  if (i === 0) {
    ws.write(`${header}\n`, (err) => {
      if (err) console.log(err);
      if (i % 100000 === 0) console.log(i);
    });
  } else {
    ws.write(`${values}\n`, (err) => {
      if (err) console.log(err);
      if (i % 100000 === 0) console.log(i);
    });
  }
};
