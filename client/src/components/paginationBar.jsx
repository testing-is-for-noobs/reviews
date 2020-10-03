import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function PaginationBar({ currentReviews, setPost, postPerPage, page, pageBar }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(currentReviews.length / postPerPage);

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  const changePage = (page) => {
    const lastIndex = postPerPage * page;
    const startIndex = lastIndex - postPerPage;
    if (page < 6 || (page === 6 && pageBar[0] === page)) {
      pageBar = pageNumbers.slice(0, 6);
    } else if (pageBar[pageBar.length - 1] === page && pageNumbers[pageNumbers.length - 1] !== page) {
      pageBar = pageNumbers.slice(page - 1, page + 4);
    } else if (pageBar[0] === page && page > 1) {
      pageBar = pageNumbers.slice(page - 5, page);
    }
    const postInfo = {
      post: currentReviews.slice(startIndex, lastIndex),
      page,
      pageBar,
    };
    setPost(postInfo);
  };

  const Pagination = styled.div`
    display: flex;
    justify-content: center;
  `;

  return(
    <Pagination>
      {pageBar.map ((page) => (
        <a key={page} href="#reviewSection">
          <button key={page} type="button" onClick={() => changePage(page)}>{page}</button>
        </a>
      ))}

    </Pagination>
  );
};

export default PaginationBar;
