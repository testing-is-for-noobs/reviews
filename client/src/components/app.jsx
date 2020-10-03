import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import OverallReviews from './overallReviews';
import Filter from './filter';
import FilteredOptions from './filteredOptions';
import IndividualReview from './individualReview';
import PaginationBar from './paginationBar';
import dummyData from './dummyData/dummyData';

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

  //pagination logic
  const postPerPage = 2;
  const [post, setPost] = useState({ post: currentReviews.slice(0, postPerPage), page: 1, pageBar: [] });

  useEffect(() => {
    axios.get('27/reviews')
      .then((initialState) => {
        setCurrentProduct(initialState.data.products[0]);
        setCurrentReviews(initialState.data.reviews);
        setPost({ post: initialState.data.reviews.slice(0, postPerPage), page: 1, pageBar: [1, 2, 3, 4, 5, 6] });
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
      <a name="reviewSection" href="#reviewSection" />
      <Filter id="filter" />
      <FilteredOptions allStarStates={allStarStates} />
      <IndividualReview post={post.post} />
      <PaginationBar setPost={setPost} currentReviews={currentReviews} postPerPage={postPerPage} page={post.page} pageBar={post.pageBar}/>
    </Style>
  );
}

export default App;
