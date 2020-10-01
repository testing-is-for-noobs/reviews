import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Ratings({ currentProduct, allStarStates}) {
  const ratings = [
    { total: currentProduct.five_star, percentage: currentProduct.five_star_percentage },
    { total: currentProduct.four_star, percentage: currentProduct.four_star_percentage },
    { total: currentProduct.three_star, percentage: currentProduct.three_star_percentage },
    { total: currentProduct.two_star, percentage: currentProduct.two_star_percentage },
    { total: currentProduct.one_star, percentage: currentProduct.one_star_percentage }
  ];
  const ids = ['fiveStar', 'fourStar', 'threeStar', 'twoStar', 'oneStar'];

  //Styling
  const RatingsStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
  `;

  const StarButton = styled.button`
    box-shadow: none;
    cursor: pointer;
    color: inherit;
    font: inherit;
    background-color: transparent;
    border: 0;
  `;

  const XComponent = styled.span`
    color: blue;
    font-style: inherit;
    font-family: inherit;
  `;

  return (
    <RatingsStyle>
      <div>Rating</div>
      {ratings.map((starRating, i) => {
        const [currentStar, setCurrentStar] = allStarStates[allStarStates.length - 1 - i];

        return (
          <div key={i}>
            <StarButton type="button" disabled={starRating.total === 0} onClick={() => setCurrentStar(!currentStar)} style={{ 'background-color': currentStar ? 'rgb(230, 243, 255)' : 'inherit' }}>
              {` ${5 - i} stars `}
              <progress value={starRating.percentage.toString()} max="1" />
              {' '}
              <span id={ids[i]}>{starRating.total}</span>
              {' Reviews'}
              <XComponent style={{ visibility: currentStar ? 'visible' : 'hidden' }}> X</XComponent>
            </StarButton>
            <br />
          </div>
        );
      })}
    </RatingsStyle>
  );
}

export default Ratings;
