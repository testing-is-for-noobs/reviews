import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';

import starbar from './ratingBars/starbar';
import AReview from './individualReview/aReview';
import dummyData from './dummyData/individualReview';

function IndividualReview({ post }) {
  const {pid} = post[0];
  const experienceTypes = ['Play Experience', 'Level of Difficulty', 'Value for Money', 'Build Time', 'Building Experience'];

  const [votes, setVotes] = useState(dummyData);
  useEffect(() => {
    const allVotes = {};
    for (let i = 0; i < post.length; i += 1) {
      allVotes[post[i].id] = {
        upvotes: false,
        downvotes: false,
        upvotesCount: post[i].upvotes,
        downvotesCount: post[i].downvotes,
      };
    }
    setVotes(allVotes);
  }, []);

  const handleVote = (id, voteType) => {
    const newVotes = { ...votes };
    if(newVotes[id][voteType]) {
      //decreases vote by 1
      axios.put(`/${pid}/reviews/vote/${voteType}/${id}/N`);
      newVotes[id][`${voteType}Count`] -= 1;
    } else {
      //increases vote by 1
      axios.put(`/${pid}/reviews/vote/${voteType}/${id}/Y`);
      newVotes[id][`${voteType}Count`] += 1;
    }
    newVotes[id][voteType] = !newVotes[id][voteType];
    setVotes(newVotes);
  };

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

  const RatingNumber = styled(Bolded)`
  vertical-align: 15%
  `;

  const Thumbs = styled.button`
    background-color: transparent;
    color: transparent;
    text-shadow: 0 0 0 gray;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  const Votes = styled.span`
    color: rgb(44, 44, 44);
    font-size: 0.75rem;
  `;

  return (
    <IndividualReviewSection>
      {post.map((review, i) => {
        const date = moment(review.date).format('MMMM D, Y');
        let downvotes = false;
        if (votes[review.id]) {
          downvotes = votes[review.id].downvotes;
        }
        let upvotes = false;
        if (votes[review.id]) {
          upvotes = votes[review.id].upvotes;
        }

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
              <RatingNumber>
                {` ${review.rating}`}
              </RatingNumber>
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
                {/* <div>{review.review}</div> */}
                <AReview oneReview={review.review} />
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
                          <RatingNumber>
                            {` ${experienceRating}`}
                          </RatingNumber>
                        </div>
                      </div>
                    );
                  }
                })}
              </Experience>
            </ReviewExperienceWrap>
            <div>Was this helpful?</div>
            <div>
              <Thumbs onClick={() => handleVote(review.id, 'upvotes')}
                style={{
                  'text-shadow': upvotes ? '0 0 0 rgb(0, 109, 183)' : '0 0 0 gray',
                }}
              >
                &#x1f44d;
              </Thumbs>
              <Votes>{votes[review.id] ? votes[review.id].upvotesCount : 0}</Votes>
              <Thumbs onClick={() => handleVote(review.id, 'downvotes')}
                style={{
                  'text-shadow': downvotes ? '0 0 0 rgb(0, 109, 183)' : '0 0 0 gray',
                }}
              >
                &#x1f44e;
              </Thumbs>
              <Votes>{votes[review.id] ? votes[review.id].downvotesCount : 0}</Votes>
            </div>
          </ReviewWrap>
        );
      })}
    </IndividualReviewSection>
  );
}

export default IndividualReview;
