# Reviews

## Reviews Schema

pid: NUMBER

uid: NUMBER

user_name: STRING

user_age_range: STRING

purchase_for: STRING

review_title: STRING

review: STRING

date: DATE

star_rating: NUMBER

recommendationYN: BOOLEAN

helpful_yes: NUMBER

helpful_no: NUMBER

play_experience NUMBER

difficulty_level NUMBER

money_value NUMBER

build_hrs NUMBER

build_mins NUMBER
  
building_experience STRING


# Reviews APIS

_Read all reviews_

* GET: `/reviews/:pid`

* Success Status Code: `200`

* Returns: JSON array of multiple reviews. 

```
[ 
    { 
        pid: 1,
        
        uid: 12,

        user_name: 'A',
        
        user_age_range: '25-30',
        
        purchase_for: 'self',
        
        star_rating: 3,
        
        data: June 7th, 2020,
        
        review: 'hi! blablabla',
        
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
```
_Create a new review_

* POST: `/reviews/:pid`

* Success Status Code: `201`

* Request Body: Expects JSON with the following keys

```

{
    user_name: 'B',
    
    user_age_range: '30-35',
    
    user_purchase_for: 'self',
    
    star_rating: 3,
    
    data: June 20th, 2020,
    
    reviews: 'hi! blablabla',
    
    play_experience: 2,
    
    difficulty_level: 3,
    
    money_value: 3,
    
    build_hrs: 30,
    
    build_mins: 10,
    
    building_experience: Expert LEGO builder,
}

```

_Update the number of helpful_yes and helpful_no_

* PUT: `/reviews/helpful/:pid`

* Success Status Code: `202`

* Request Body: Expects JSON with updated the number of of helpful_yes and helpful_no

```
{ 
    helpful_yes: Number,

    helpful_no: Number,
}

```

_Delete the user's review_

* DELETE: `/reviews/:pid/:uid`

* Success Status Code: 202

* Request Body: delete the user's review




