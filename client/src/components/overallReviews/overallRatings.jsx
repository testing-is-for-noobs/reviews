import React, { useState, useEffect } from 'react';

function OverallRatings({ currentProduct }) {
  return (
    <div>
      <div>Overall Rating</div>
      <div>
        ===INSERT STAR BAR HERE===
        <span id="avgScore">{currentProduct.avg_score}</span>
        {` ${currentProduct.total_reviews} Reviews `}
      </div>
      <button type="button"> Write a Review </button>
    </div>
  );
}

export default OverallRatings;
