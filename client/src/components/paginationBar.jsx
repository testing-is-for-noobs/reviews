import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function PaginationBar({ currentReviews, setPost, postPerPage, page, pageBar, pageNumbers }) {
  //styling
  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
  `;

  const LeftRightButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
  `;

  const PageButton = styled(LeftRightButton)`
    font: inherit;
    color:  #006db7;
    font-size: 0.8em;
    vertical-align: 13%;
  `;

  const Dots = styled.span`
    display: flex;
    gap: 10px;
  `;

  const finalPageNumber = pageNumbers[pageNumbers.length - 1];
  let leftDots;
  let rightDots;
  if (page >= 6 && pageBar[0] !== 1 ) {
    leftDots = (
      <Dots>
        <a key={page} href="#reviewSection">
          <PageButton type="button" onClick={() => changePage(1)}>1</PageButton>
        </a>
        <span>...</span>
      </Dots>
    );
  }
  if (page <= finalPageNumber
    && !pageBar.includes(finalPageNumber)) {
    rightDots = (
      <Dots>
        <span>...</span>
        <a key={page} href="#reviewSection">
          <PageButton type="button" onClick={() => changePage(finalPageNumber)}>{finalPageNumber}</PageButton>
        </a>
      </Dots>
    );
  }

  const changePage = (page) => {
    const lastIndex = postPerPage * page;
    const startIndex = lastIndex - postPerPage;
    if (page < 6 || (page === 6 && pageBar[0] === page)) {
      pageBar = pageNumbers.slice(0, 6);
    } else if (pageBar[0] >= page && page > 1) {
      pageBar = pageNumbers.slice(page - 5, page);
    } else if (finalPageNumber === page
      || finalPageNumber - 5 < page) {
      pageBar = pageNumbers.slice(-5);
    } else if (pageBar[pageBar.length - 1] <= page && finalPageNumber !== page) {
      pageBar = pageNumbers.slice(page - 1, page + 4);
    }
    const postInfo = {
      post: currentReviews.slice(startIndex, lastIndex),
      page,
      pageBar,
    };
    setPost(postInfo);
  };

  const handleLeftRightClick = (direction) => {
    if (direction === 'left') {
      changePage(page - 1);
    } else {
      changePage(page + 1);
    }
  };

  return(
    <Pagination>
      <LeftRightButton type="button" disabled={page === 1} onClick={() => handleLeftRightClick('left')}>&#x2329;</LeftRightButton>
      {leftDots}
      {pageBar.map ((num) => (
        <a key={num} href="#reviewSection">
          <PageButton key={num} type="button" onClick={() => changePage(num)} style={{
            'text-decoration': num === page ? 'underline' : 'none',
            color: num === page ? 'black' : '#006db7',
          }}>{num}</PageButton>
        </a>
      ))}
      {rightDots}
      <LeftRightButton type="button" disabled={page === finalPageNumber} onClick={() => handleLeftRightClick('right')}>&#x232a;</LeftRightButton>
    </Pagination>
  );
};

export default PaginationBar;
