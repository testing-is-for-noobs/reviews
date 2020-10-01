import React, { useState, useEffect } from 'react';
import moment from 'moment';

import starbar from './ratingBars/starbar.jsx';

function IndividualReview({ currentReviews }) {
  const experienceTypes = ['Play Experience', 'Level of Difficulty', 'Value for Money', 'Building Experience'];

  return (
    <div>
      {currentReviews.map((review, i) => {
        const date = moment(review.date).format('MMMM D, Y');

        const recommendation = review.recommendationYN === 'Y' ? <div>I would recommend this to a friend!</div> : undefined;
        const experienceRatings = [review.play_experience, review.difficulty_level,
          review.money_value, review.building_experience];

        return (
          <div key={i}>
            <div>{date}</div>
            <div>
              {starbar(review.rating)}
              {` ${review.rating}`}
            </div>
            <div>{review.review_header}</div>
            <div>
              {`${review.username} | `}
              <span>{review.age_range}</span>
            </div>
            {recommendation}
            <div>
              Purchased for:
              {` ${review.purchased_for}`}
            </div>
            <div>{review.review}</div>
            <div>Was this helpful?</div>
            <div>
              ==Insert thumbup==
              {review.upvotes}
              ==Insert thumbdown==
              {review.downvotes}
            </div>
            {experienceRatings.map((experienceRating, i) => {
              if (experienceRating !== null) {
                if (experienceTypes[i] === 'Building Experience') {
                  return (
                    <div key={experienceTypes[i]}>
                      <div>{`${experienceTypes[i]}: ${experienceRating}`}</div>
                    </div>
                  );
                }
                return (
                  <div key={experienceTypes[i]}>
                    <div>{experienceTypes[i]}</div>
                    <div>
                      {starbar(experienceRating)}
                      {` ${experienceRating}`}
                    </div>
                  </div>
                );
              }
            })}

          </div>
        );
      })}
    </div>
  );
}

export default IndividualReview;
