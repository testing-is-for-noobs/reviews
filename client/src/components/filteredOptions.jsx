import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function FilteredOptions({ allStarStates }) {
  const clearAll = () => {
    for (let i = 0; i < allStarStates.length; i += 1) {
      const setCurrentState = allStarStates[i][1];
      setCurrentState(false);
    }
  };

  //styling
  const FilterButton = styled.button`
    outline: none;
    box-shadow: none;
    cursor: pointer;
    font: inherit;
    background-color: rgb(230, 243, 255);
    border: 0;
    padding: 10px 5px;
    margin: 15px 5px;
  `;

  const XComponent = styled.span`
    color: rgb(0, 109, 183);
  `;

  const ClearFilterButton = styled(FilterButton)`
    background-color: transparent;
    border: 1px solid rgb(0, 109, 183);
  `;

  let filters = allStarStates.map((filter, i) => {
    const [currentFilter, setCurrentFilter] = filter;
    if (currentFilter) {
      return (
        <span key={i}>
          <FilterButton type="button" onClick={() => setCurrentFilter(!currentFilter)}>
            {`${i + 1} star reviews `}
            <XComponent> &times; </XComponent>
          </FilterButton>
        </span>
      );
    }
  });
  if (filters.some((val) => val)) {
    filters = (
      <div>
        <div>Active Filter(s)</div>
        {filters}
        <ClearFilterButton onClick={clearAll}>
          Clear Filters
          <XComponent> &times; </XComponent>
        </ClearFilterButton>
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
