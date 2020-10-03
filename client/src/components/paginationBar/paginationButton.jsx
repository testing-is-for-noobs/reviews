import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function PaginationButton({ page, currentReviews, postPerPage, setPost, setPageBar, pageBar }) {
  const changePage = (page) => {
    const lastIndex = postPerPage * page;
    const startIndex = lastIndex - postPerPage;
    setPost(currentReviews.slice(startIndex, lastIndex));
    setPageBar([7,8,9]);
    console.log(pageBar)
  };
  console.log(pageBar)

  return(
    <button type="button" onClick={() => changePage(page)}>{page}</button>
  );

};

export default PaginationButton;
