import React, { useState, useEffect } from 'react';

function Filter() {
  return (
    <div>
      <select>
        <option>Date - Newest first</option>
        <option>Date - oldest first</option>
        <option>Rating - High to Low</option>
        <option>Rating - Low to High</option>
        <option>Helpfulness</option>
        <option>Most Relevant</option>
      </select>
    </div>
  );
}

export default Filter;
