import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function AReview({ oneReview }) {
  const [displayMore, setDisplayMore] = useState(false);

  const alwaysDisplay = oneReview.substring(0, 500);
  const showMoreTxt = oneReview.substring(500);

  let showMoreDiv;
  let buttonTxt;
  if (showMoreTxt.length && !displayMore) {
    showMoreDiv = <span>...</span>;
    buttonTxt = 'Read More';
  } else if (showMoreTxt && displayMore) {
    showMoreDiv = showMoreTxt;
    buttonTxt = 'Show Less';
  }

  //styling
  const Button = styled.button`
    border: none;
    outline: none;
    color:  #006db7;
    background-color: transparent;
    cursor: pointer;
    padding-left: 0;
  `;

  return (
    <div>
      {alwaysDisplay}
      {showMoreDiv}
      <div>
        <Button type='button' onClick={() => setDisplayMore(!displayMore)}>{buttonTxt}</Button>
      </div>
    </div>
  );
};

export default AReview;