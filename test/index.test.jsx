import React from 'react';
import { shallow, mount, render } from 'enzyme';
import OverallRatings from '../client/src/components/overallReviews/overallRatings';

//mock a request

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
    money_value_avg: 3,
    five_star_percentage: 0,
    four_star_percentage: 0.5,
    three_star_percentage: 0.13,
    two_star_percentage: 0,
    one_star_percentage: 0.38,
  };

  it('should display average score next to the first star rating bar', () => {
    const wrapper = shallow(<OverallRatings currentProduct={currentProduct} />);
    const text = wrapper.find('#avgScore').text();
    expect(text).toEqual('2.05');
  });
});


//If Play Experience, Level of Difficulty, or Value for Money are NULL, it should not appear

//test if each component has the correct text displaying