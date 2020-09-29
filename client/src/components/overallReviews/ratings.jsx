import React, { useState, useEffect } from 'react';

function Ratings({ currentProduct, allStarStates}) {
  const ratings = [
    { total: currentProduct.five_star, percentage: currentProduct.five_star_percentage },
    { total: currentProduct.four_star, percentage: currentProduct.four_star_percentage },
    { total: currentProduct.three_star, percentage: currentProduct.three_star_percentage },
    { total: currentProduct.two_star, percentage: currentProduct.two_star_percentage },
    { total: currentProduct.one_star, percentage: currentProduct.one_star_percentage }
  ];

  return (
    <div>
      {ratings.map((starRating, i) => {
        const [currentStar, setCurrentStar] = allStarStates[allStarStates.length - 1 - i];

        return (
          <div key={i}>
            <button type="button" onClick={() => setCurrentStar(!currentStar)}>
              {` ${5 - i} stars `}
              <progress value={starRating.percentage.toString()} max="1" />
              {` ${starRating.total} Reviews `}
              <span> X</span>
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Ratings;
