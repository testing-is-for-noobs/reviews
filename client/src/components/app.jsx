import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-transition-group';

import OverallReviews from './overallReviews';
import Filter from './filter';
import FilteredOptions from './filteredOptions';
import IndividualReview from './individualReview';
import PaginationBar from './paginationBar';
import dummyData from './dummyData/dummyData';

// const URL = 'http://localhost:3000';

function App() {
  const [currentProduct, setCurrentProduct] = useState(dummyData.products[0]);
  const [allReviews, setAllReviews] = useState(dummyData.reviews);
  const [currentReviews, setCurrentReviews] = useState(dummyData.reviews);
  const [displayReviews, setDisplayReviews] = useState(false);

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
  const postPerPage = 3;
  const [post, setPost] = useState({
    post: currentReviews.slice(0, postPerPage),
    page: 1,
    pageBar: [],
  });
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    axios.get('/81/reviews')
      .then((initialState) => {
        setCurrentProduct(initialState.data.products[0]);
        setCurrentReviews(initialState.data.reviews);
        setAllReviews(initialState.data.reviews);
        //write logic for pageBar
        const pages = [];
        const totalPages = Math.ceil(initialState.data.reviews.length / postPerPage);
        for (let i = 1; i <= totalPages; i += 1) {
          pages.push(i);
        }
        setPageNumbers(pages);
        setPost({
          post: initialState.data.reviews.slice(0, postPerPage),
          page: 1,
          pageBar: pages.slice(0, 6),
        });
      })
      .catch(() => {
        console.error('Could not grab the current state');
      });
  }, []);

  const Style = styled.div`
    font-size: 16px;
    font-family: Cera Pro,sans-serif;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const ShowReviewsButton = styled.button`
    background-color: light-gray;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 20px 10px;
  `;

  const TextWrap = styled.div`
    display: flex;
    width: 79rem;
    margin: 0 auto;
  `;

  const ShowAllReviews = styled(TextWrap)`
    display: inline;
    padding: 10px 41px;
  `;

  const ReviewButtonText = styled.span`
    display: flex;
    flex-grow: 8;
    text-align: left;
    font-size: 2em;
  `;

  const PlusAnimation = styled.span`
    font-size: 2em;
  `;

  return (
    <Style>
      <ShowReviewsButton type="button" onClick={() => setDisplayReviews(!displayReviews)}>
        <TextWrap>
          <ReviewButtonText>{`Customer Reviews (${currentReviews.length})`}</ReviewButtonText>
          <PlusAnimation style={{transform:[{rotate: '30 deg'}]}}>
            {displayReviews ? '\u2296' : '\u2295'}
          </PlusAnimation>
        </TextWrap>
      </ShowReviewsButton>
      {
        displayReviews
        && (
          <ShowAllReviews>
            <OverallReviews currentProduct={currentProduct} allStarStates={allStarStates} />
            <a name="reviewSection" href="#reviewSection" />
            <Filter id="filter" />
            <FilteredOptions allStarStates={allStarStates} />
            <IndividualReview post={post.post} />
            <PaginationBar
              setPost={setPost}
              currentReviews={currentReviews}
              postPerPage={postPerPage}
              page={post.page}
              pageBar={post.pageBar}
              pageNumbers={pageNumbers}
            />
          </ShowAllReviews>
        )
      }
    </Style>
  );
}

export default App;
