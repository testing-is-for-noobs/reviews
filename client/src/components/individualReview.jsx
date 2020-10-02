import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import starbar from './ratingBars/starbar';

function IndividualReview({ currentReviews }) {
  const experienceTypes = ['Play Experience', 'Level of Difficulty', 'Value for Money', 'Build Time', 'Building Experience'];

  //styling
  const IndividualReviewSection = styled.section`

  `;

  const ReviewWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid rgb(224, 224, 224);
    padding: 15px 0;
  `;

  const ReviewExperienceWrap = styled.div`
    display: flex;

  `;

  const Experience = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    gap: 15px;
  `;

  const Review = styled(Experience)`
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    margin-right: 1em;
  `;

  const Recommend = styled.div`
    color: rgb(0, 133, 55);
    font-size: 1rem;
    font-weight: 400;
  `;

  const UsernameInfo = styled.div`
    font-size: 0.875rem;
  `;

  const Username = styled.a`
    color: #006db7;
    text-decoration: none;
    :hover{
      text-decoration: underline;
    }
  `;

  const Bolded = styled.span`
    font-weight: bold;
  `;

  const Thumbs = styled.button`
    background-color: transparent;
    border: none;
    color: gray;
  `;

  const Votes = styled.span`
    color: rgb(44, 44, 44);
    font-size: 0.75rem;
  `;

  return (
    <IndividualReviewSection>
      {currentReviews.map((review, i) => {
        const date = moment(review.date).format('MMMM D, Y');

        let buildingTime = '';
        if (review.build_hrs === 1) {
          buildingTime += `${review.build_hrs} hr `;
        } else if (review.build_hrs > 1) {
          buildingTime += `${review.build_hrs} hrs `;
        }
        if (review.build_mins === 1) {
          buildingTime += `${review.build_mins} min`;
        } else if (review.build_mins > 1) {
          buildingTime += `${review.build_mins} mins`;
        }
        if (buildingTime === '') {
          buildingTime = null;
        }

        const recommendation = review.recommendationYN === 'Y' ? <div>I would recommend this to a friend!</div> : undefined;
        const experienceRatings = [review.play_experience, review.difficulty_level,
          review.money_value, buildingTime, review.building_experience];

        return (
          <ReviewWrap key={i}>
            <div>{date}</div>
            <div>
              {starbar(review.rating)}
              {` ${review.rating}`}
            </div>
            <Bolded>{review.review_header}</Bolded>
            <UsernameInfo>
              <Username href=''>{review.username}</Username>
              <span>{` | ${review.age_range}`}</span>
            </UsernameInfo>
            <Recommend>{recommendation}</Recommend>
            <ReviewExperienceWrap>
              <Review>
                <div>
                  <Bolded>Purchased for: </Bolded>
                  <span>{` ${review.purchased_for}`}</span>
                </div>
                <div>{review.review}</div>
              </Review>
              <Experience>
                {experienceRatings.map((experienceRating, i) => {
                  if (experienceRating !== null) {
                    if (['Building Experience', 'Build Time'].includes(experienceTypes[i])) {
                      return (
                        <div key={experienceTypes[i]}>
                          <Bolded>{`${experienceTypes[i]}: `}</Bolded>
                          <span>{experienceRating}</span>
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
              </Experience>
            </ReviewExperienceWrap>
            <div>Was this helpful?</div>
            <div>
              <Thumbs>&#x1f44d;</Thumbs>
              <Votes>{review.upvotes}</Votes>
              <Thumbs>&#x1f44e;</Thumbs>
              <Votes>{review.downvotes}</Votes>
            </div>
          </ReviewWrap>
        );
      })}
    </IndividualReviewSection>
  );
}

export default IndividualReview;
