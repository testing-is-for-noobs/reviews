import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import OverallReviews from './overallReviews';
import Filter from './filter';
import FilteredOptions from './filteredOptions';
import IndividualReview from './individualReview';
import dummyData from './dummyData';

function App() {
  const [currentProduct, setCurrentProduct] = useState(dummyData.products[0]);
  const [currentReviews, setCurrentReviews] = useState(dummyData.reviews);

  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [oneStar, setOneStar] = useState(false);

  const allStarStates = [[fiveStar, setFiveStar],
    [fourStar, setFourStar],
    [threeStar, setThreeStar],
    [twoStar, setTwoStar],
    [oneStar, setOneStar],
  ];

  useEffect(() => {
    axios.get('1/reviews')
      .then((initialState) => {
        setCurrentProduct(initialState.data.products[0]);
        setCurrentReviews(initialState.data.reviews);
      })
      .catch(() => {
        console.error('Could not grab the current state');
      });
  }, []);

  const Style = styled.div`
  font-size: 16px;
  font-family: Cera Pro,sans-serif;
`;

  return (
    <Style>
      <OverallReviews currentProduct={currentProduct} allStarStates={allStarStates} />
      <br />
      <Filter />
      <br />
      <FilteredOptions allStarStates={allStarStates} />
      <br />
      <IndividualReview currentReviews={currentReviews} />
    </Style>
  );
}

export default App;
