const fs = require('fs');
const faker = require('faker');

const ws = fs.createWriteStream('postgresReview100.csv');



let rid = 0;
const users = [];
const n = 100000;
for(let j = 0; j <= 100; j+=1){
    users.push(faker.internet.userName());
};

async function writingReviews(){
    for (let i =0; i<=n; i+= 1) {
        const header = 'rid|pid|user_name|age_range|create_date|review_title|recommendationYN|purchased_for|rating|review|upvotes|downvotes|play_experience|difficulty_level|money_value|build_hrs|build_mins|building_experience';
        const pid = faker.random.number({min: 1, max: 1000});
        const user_name = users[Math.floor(Math.random()* users.length)];
        const age_range = faker.random.arrayElement(['14-18', '19-24', '25-34', '35-44', '45-54', '55-64', '65 Or Older']);
        const data = faker.date.recent(90)
        const create_date = `${data.getFullYear()}-${data.getMonth()}-${data.getDay()} `;
        const review_title = faker.company.catchPhrase();
        const recommendationYN = faker.random.arrayElement(['Y', 'N']);
        const purchased_for = faker.random.arrayElement(['Son', 'Daughter', 'Grandson', 'Granddaughter', "Friend or Family Member's Child", 'Friend', 'Self']);
        const rating = faker.random.number({ min: 1, max: 5 });
        const review = faker.lorem.sentences(20);
        const upvotes = faker.random.number({ min: 0, max: 10 });
        const downvotes = faker.random.number({ min: 1, max: 7 });
        const play_experience = faker.random.arrayElement([faker.random.number({ min: 1, max: 5 }), null]);
        const difficulty_level = faker.random.arrayElement([faker.random.number({ min: 1, max: 5 }), null]);
        const money_value = faker.random.arrayElement([faker.random.number({ min: 1, max: 5 }), null]);
        const build_hrs = faker.random.arrayElement([faker.random.number({ min: 1, max: 4 }), null]);
        const build_mins = faker.random.arrayElement([faker.random.number({ min: 1, max: 59 }), null]);
        const building_experience = faker.random.arrayElement(['Novice LEGO Builder', 'Intermediate LEGO Builder', 'Advanced LEGO Builder', 'Expert LEGO Builder', null]);

        const values = `${rid}|${pid}|${user_name}|${age_range}|${create_date}|${review_title}|${recommendationYN}|${purchased_for}|${rating}|${review}|${upvotes}|${downvotes}|${play_experience}|${difficulty_level}|${money_value}|${build_hrs}|${build_mins}|${building_experience}`;
        rid += 1;
        if(i === 0){
            ws.write(`${header}\n`, (err) => {
                if(err) console.log(err);
                if(i % 10000000 === 0) console.log(i);
            })
        } else {
            const writingStream = ws.write(`${values}\n`);
            if(!writingStream){
                await new Promise((resolve) =>{
                    ws.once('drain', resolve);
                });
            }
            if(i % 1000000 === 0) console.log(i);
        }
    }

}

writingReviews();
