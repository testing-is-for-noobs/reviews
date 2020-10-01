import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function WouldRecommend({ currentProduct }) {
  const Recommend = styled.div`
  color: rgb(0, 133, 55);
  font-size: 1rem;
  font-weight: 400;
  `;

  return (
    <Recommend>
      <div>{`${currentProduct.recommendation_percentage}% would recommend this product.`}</div>
    </Recommend>
  );
}

export default WouldRecommend;
