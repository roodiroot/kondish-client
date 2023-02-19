import React from 'react';

function ReviewBlock({ info }) {
  return (
    <>
      <div className="bodyReviews__top">
        <div className="bodyReviews__title">{info?.service}</div>
        <div className="bodyReviews__text">{info?.text}</div>
      </div>
      <div className="bodyReviews__person ">
        <span className="bodyReviews__item icon-ll"></span>
        {info?.name}
      </div>
    </>
  );
}

export default ReviewBlock;
