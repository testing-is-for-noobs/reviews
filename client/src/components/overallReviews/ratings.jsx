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
    gap: 5px;
  `;

  const XComponent = styled.span`
    color: blue;
    font-style: inherit;
    font-family: inherit;
  `;

  const Progress = styled.progress`

    -webkit-appearance: none;
    appearance: none;

    ::-webkit-progress-value {
      background-color: gold;
      border-radius: 20px;
    }

    ::-webkit-progress-bar {
      background-color: rgb(224, 224, 224);
      border-radius: 20px;
    }
  `;

  return (
    <RatingsStyle>
      <div>Rating</div>
      {ratings.map((starRating, i) => {
        const [currentStar, setCurrentStar] = allStarStates[allStarStates.length - 1 - i];

        const disabled = starRating.total === 0;

        let backgroundColor;
        let color;
        let pointer;
        let fontStyle;
        if (disabled) {
          color = 'rgb(224, 224, 224)';
          backgroundColor = 'transparent';
          pointer = 'no-drop';
          fontStyle = 'italic';
        } else if (currentStar) {
          color = 'inherit';
          backgroundColor = 'rgb(230, 243, 255)';
          pointer = 'pointer';
          fontStyle = 'inherit';
        } else {
          color = 'inherit';
          backgroundColor = 'transparent';
          pointer = 'pointer';
          fontStyle = 'inherit';
        }

        const StarButton = styled.button`
          outline: none;
          box-shadow: none;
          cursor: ${pointer};
          color: ${color};
          font: inherit;
          background-color: ${backgroundColor};
          border: 0;
          padding: 10px 5px;
          font-style: ${fontStyle};
        `;

        return (
          <div key={i}>
            <StarButton type="button" disabled={disabled} onClick={() => setCurrentStar(!currentStar)}>
              {` ${5 - i} stars `}
              <Progress value={starRating.percentage.toString()} max="1" />
              {' '}
              <span id={ids[i]}>{starRating.total}</span>
              {' Reviews'}
              <XComponent style={{ visibility: currentStar ? 'visible' : 'hidden' }}> &times;</XComponent>
            </StarButton>
            <br />
          </div>
        );
      })}
    </RatingsStyle>
  );
}

export default Ratings;
