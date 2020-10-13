import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Filter() {
  const FilterWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const Select = styled.select`
    border: none;
    height: 100%;
    width: 100%;
    align-items: center;
    outline: none;
  `;

  const SelectWrap = styled.div`
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(224, 224, 224);
    font-family: inherit;
    padding: 10px;
  `;

  const Reviews = styled.div`
    font-size: 1.125rem;
    font-weight: bold;
  `;

  return (
    <FilterWrap>
      <Reviews>Reviews</Reviews>
      <SelectWrap>
        <Select defaultValue='Most Relevant'>
          <option>Date - Newest first</option>
          <option>Date - oldest first</option>
          <option>Rating - High to Low</option>
          <option>Rating - Low to High</option>
          <option>Helpfulness</option>
          <option>Most Relevant</option>
        </Select>
      </SelectWrap>
    </FilterWrap>
  );
}

export default Filter;
