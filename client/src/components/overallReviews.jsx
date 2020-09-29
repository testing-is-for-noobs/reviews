import React, { useState, useEffect } from 'react';
import OverallRatings from './overallReviews/overallRatings.jsx';
import WouldRecommend from './overallReviews/wouldRecommend.jsx';
import Ratings from './overallReviews/ratings.jsx';
import OverallExperience from './overallReviews/overallExperience.jsx';

function OverallReviews({currentProduct, allStarStates}) {
  return (
    <div>
      <OverallRatings currentProduct={currentProduct} />
      <WouldRecommend currentProduct={currentProduct} />
      <Ratings currentProduct={currentProduct} allStarStates={allStarStates} />
      <OverallExperience currentProduct={currentProduct} />
      <div>Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries from the same IP address. To see how to control your personal data, please see our <a href='https://www.lego.com/en-us/legal/notices-and-policies/privacy-policy'>Privacy policy</a>.</div>
    </div>
  );
}

export default OverallReviews;