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
//continue test if each component has the correct text displaying

//write a review button should have hover effect that makes the background white and text blue

//If Play Experience, Level of Difficulty, or Value for Money are NULL, it should not appear

//when filters are clicked, each one should display in numerical order under the filter bar and have a blue border around it with an X displayed
  //when toggled off in both sections, the filter should no longer have a blue background and a section underneath the filter bar
  //when clear all button is pressed, all filters should be toggled off
  //you should not be able to click on a section with 0 reviews

//filter bar should display 6 options when clicked

//if a review section has more than 500 characters, a "Read More" button will appear
  //when "Read More" is pressed, it should display the rest of the text and change into "Show Less"
  //when "Show Less" is pressed, it should hide the text after the 500th character and change into "Read More"

//Text should not appear when if the review id's "recommendationYN" is equal to N

//when voting, you should only be able to go up a maximum of +1 for each downvote and upote
  //it should turn blue and add 1 every odd time you click a thumb
  //it should turn gray and subtract 1 every even time you click a thumb
  //Data should persist when refreshing the page and reset all thumbs to the toggled off state

//Pagination should render a bar of page numbers at the bottom of all the reviews
  //it should display a maximum of 4 reviews per page
  //it should display a maximum of 8 page numbers at the bottom
  //it should show the first and last page at all times
  //when clicking left and right buttons, the page in decrease and increase respectivley by one page
  //it should render the exact page number when direclty clicking on it

//the page should only show a bar in its original rendered state showing a + sign
  //it should show the rest of the review section when clicked and show a - sign
  //it should hide the review section when clicked again and show a + sign

//stars should display accurately rounded to the nearest half star