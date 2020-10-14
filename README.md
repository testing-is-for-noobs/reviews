# reviews schema
user_id: NUMBER.

user_name: STRING

user_age_range: STRING

user_purchase_for: STRING

star_rating: NUMBER

reviews: STRING

helpful_yes: NUMBER

helpful_no:NUMBER

play_experience: STRING

difficulty_level: NUMBER

money_value: NUMBER

build_hrs: STRING

build_mins: STRING

building_experience: STRING



# reviews APIs
Read all the reviews

- GET: /reviews/:pid

* Success Status Code: 200

* Returns: JSON array of multiple reviews.
`[
    {
        pid: 1,
	
        uid: 12,
	
        user_name: 'A',
	
        user_age_range: '25-30',
	
        user_purchase_for: 'self',
	
        star_rating: 3,
	
        data: June 7th, 2020,
	
        reviews: 'hi! blablabla'
	
        helpful_yes: 10,
	
        helpful_no: 4,
	
        play_experience: 2,
	
        difficulty_level: 3,
	
        money_value: 3,
	
        build_hrs: 30,
	
        build_mins: 10,
	
        building_experience: Intermediate LEGO builder,
    }
]
`

Create a review

- POST: /reviews/:pid

* Success Status Code: 201

* Request Body: Expects JSON with the following keys

`{
    user_name: 'B',
    
    user_age_range: '30-35',
    
    user_purchase_for: 'self',
    
    star_rating: 3,
    
    data: June 20th, 2020,
    
    reviews: 'hi! blablabla'
    
    play_experience: 2,
    
    difficulty_level: 3,
    
    money_value: 3,
    
    build_hrs: 30,
    
    build_mins: 10,
    
    building_experience: Expert LEGO builder,
}`

Update the number of helpful_yes and helpful_no

- PUT: /reviews/helpful/:pid

* Success Status Code: 204

* Request Body: Expects JSON with updated the number of of helpful_yes and helpful_no

`{
    helpful_yes: Number,
    
    helpful_no: Number,
}`

Delete the user's review

- DELETE:/api/reviews/:pid/:uid

* Success Status Code: 204
