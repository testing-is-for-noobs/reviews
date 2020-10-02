import React from 'react';
import styled from 'styled-components';

function starbar(num) {
  const Gold = styled.span`
    font-size: 1.5em;
    margin: 1.5px;
    color: gold;
    position: relative;
  `;

  const Gray = styled(Gold)`
    color: rgb(224, 224, 224);
    position: relative;
  `;

  let counter = 0;
  const stars = [];
  for (counter; counter < Math.floor(num); counter += 1) {
    stars.push(
      <Gold>
        &#x2605;
      </Gold>,
    );
  }

  const remainder = num - counter;
  if (remainder >= 0.75) {
    counter += 1;
    stars.push(
      <Gold>
        &#x2605;
      </Gold>,
    );
  } else if (remainder >= 0.3 && remainder < 0.75) {
    counter += 1;
    stars.push(
      <Gray>
        &#x2605;
        <span style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '.45em',
          color: 'gold',
          overflow: 'hidden',
        }}>
          &#x2605;
        </span>
      </Gray>,
    );
  }

  for (let i = 0; i < (5 - counter); counter += 1) {
    stars.push(
      <Gray>
        &#x2605;
      </Gray>,
    );
  }

  return (
    <span>
      {stars.map((star, i) => <span key={i}>{star}</span>)}
    </span>
  );
}

export default starbar;
