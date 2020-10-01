import React from 'react';
import { shallow, mount, render } from 'enzyme';
import OverallRatings from '../client/src/components/overallReviews/overallRatings';
import OverallExperience from '../client/src/components/overallReviews/overallExperience';
import Ratings from '../client/src/components/overallReviews/ratings';

describe ('Overall Reviews section display ', () => {
  const currentProduct = {
    pid: 1,
    avg_score: 2.05,
    total_reviews: 8,
    recommendation_percentage: 25,
    five_star: 0,
    four_star: 4,
    three_star: 1,
    two_star: 0,
    one_star: 3,
    play_experience_avg: 1,
    difficulty_level_avg: 2.2,
    money_value_avg: null,
    five_star_percentage: 0,
    four_star_percentage: 0.5,
    three_star_percentage: 0.13,
    two_star_percentage: 0,
    one_star_percentage: 0.38,
  };
  const allStarStates = [
    [false, () => { }],
    [false, () => { }],
    [false, () => { }],
    [false, () => { }],
    [false, () => { }],
  ];

  it('should display average score next to the first star rating bar', () => {
    const wrapper = shallow(<OverallRatings currentProduct={currentProduct} />);
    const text = wrapper.find('#avgScore').text();
    expect(text).toEqual('2.05');
  });

  it('should not find any score for Value for Money', () => {
    const wrapper = shallow(<OverallExperience currentProduct={currentProduct} />);
    const moneyVal = wrapper.find('#ValueforMoney').exists();
    expect(moneyVal).toBeFalsy();
  });

  it('should display score for Difficulty Level Average', () => {
    const wrapper = shallow(<OverallExperience currentProduct={currentProduct} />);
    const text = wrapper.find('#LevelofDifficulty').text();
    expect(text).toEqual('2.2');
  });

  it('should display score for total 3 star ratings', () => {
    const wrapper = shallow(<Ratings currentProduct={currentProduct}
      allStarStates={allStarStates} />);
    const text = wrapper.find('#threeStar').text();
    expect(text).toEqual('1');
  });
});

//If Play Experience, Level of Difficulty, or Value for Money are NULL, it should not appear

//test if each component has the correct text displaying

//when filters are clicked, the number on the total reviews should change to the total of all filtered toggled on

//