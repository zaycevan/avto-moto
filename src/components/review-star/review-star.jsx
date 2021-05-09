import React from 'react';

const ReviewStar = () => {
  return (
    <>
      <label htmlFor="1-stars" className="form__rating-label">
        <svg className="form__star-image" width="28" height="28">
          <use xlinkHref="img/sprite.svg#star"></use>
        </svg>
      </label>
      <input className="form__rating-input visually-hidden" name="1-stars" id="1-stars" type="radio"/>
    </>
  );
};

export default ReviewStar;
