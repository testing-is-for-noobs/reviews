import React, { useState, useEffect } from 'react';

function WouldRecommend({ currentProduct }) {
  return (
    <div>
      <div>{`${currentProduct.recommendation_percentage}% would recommend this product`}</div>
    </div>
  );
}

export default WouldRecommend;
