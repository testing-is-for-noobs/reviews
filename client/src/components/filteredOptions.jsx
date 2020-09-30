import React, { useState, useEffect } from 'react';

function FilteredOptions({ allStarStates }) {
  let filters = allStarStates.map((filter, i) => {
    const currentFilter = filter[0];
    if (currentFilter) {
      return (
        <span key={i}>{`${i + 1} star reviews `}</span>
      );
    }
  });
  if(filters.some(val => val)) {
    filters = (
      <div>
        <div>Active Filter(s)</div>
        {filters}
        <span>Clear Filters </span>
      </div>
    );
  }

  return (
    <div>
      {filters}
    </div>
  );
}

export default FilteredOptions;
