import React, { useState, useEffect } from 'react';
import axios from 'axios';

import OverallReviews from './overallReviews.jsx';
import Filter from './filter.jsx'
import FilteredOptions from './filteredOptions.jsx'
import IndividualReview from './individualReview.jsx'
import dummyData from './dummyData.js';

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
    axios.get('12/reviews')
      .then((initialState) => {
        setCurrentProduct(initialState.data.products[0]);
        setCurrentReviews(initialState.data.reviews);
      })
      .catch(() => {
        console.error('Could not grab the current state');
      });
  }, []);

  return (
    <div>
      <OverallReviews currentProduct={currentProduct} allStarStates={allStarStates} />
      <br />
      <Filter />
      <br />
      <FilteredOptions allStarStates={allStarStates} />
      <br />
      <IndividualReview currentReviews={currentReviews} />
    </div>
  );
}

export default App;
