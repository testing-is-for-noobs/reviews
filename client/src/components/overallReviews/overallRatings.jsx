import React, { useState, useEffect } from 'react';

function OverallRatings({ currentProduct }) {
  return (
    <div>
      <div>Overall Rating</div>
      <div>{`${currentProduct.total_reviews} ===INSERT STAR BAR HERE=== ${currentProduct.total_reviews} Reviews `}</div>
      <button> Write a Review </button>
    </div>
  );
}

export default OverallRatings;
