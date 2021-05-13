import React from 'react';
import Review from '../review/review';
import ReviewPopup from '../review-popup/review-popup';

const Reviews = () => {
  return (
    <div className="reviews block-hide">
      <button className="reviews__button button">оставить отзыв</button>
      <ul className="reviews__list">
        <Review />
        <Review />
      </ul>
      <ReviewPopup />
    </div>
  );
};

export default Reviews;
