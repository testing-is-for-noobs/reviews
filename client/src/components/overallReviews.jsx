import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import OverallRatings from './overallReviews/overallRatings';
import WouldRecommend from './overallReviews/wouldRecommend';
import Ratings from './overallReviews/ratings';
import OverallExperience from './overallReviews/overallExperience';

function OverallReviews({currentProduct, allStarStates}) {
  const OverallSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  `;

  const RatingsAndExperience = styled.div`
    display: flex;
    padding-bottom: 15px;
    gap: 20px;
  `;

  const PrivacyMsg = styled.div`
    font-style: italic;
    font-size: 0.875rem;
    border-top: 1px solid rgb(224, 224, 224);
    padding: 20px 0;
  `;

  return (
    <OverallSection>
      <OverallRatings currentProduct={currentProduct} />
      <WouldRecommend currentProduct={currentProduct} />
      <RatingsAndExperience>
        <Ratings currentProduct={currentProduct} allStarStates={allStarStates} />
        <OverallExperience currentProduct={currentProduct} />
      </RatingsAndExperience>
      <PrivacyMsg>Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries from the same IP address. To see how to control your personal data, please see our <a href='https://www.lego.com/en-us/legal/notices-and-policies/privacy-policy'>Privacy policy</a>.</PrivacyMsg>
    </OverallSection>
  );
}

export default OverallReviews;
