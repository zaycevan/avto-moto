import React from 'react';
import PropTypes from 'prop-types';

const ReviewStar = (props) => {
  const {
    starValue,
    onChange,
    rating,
  } = props;

  return (
    <>
      <input
        onChange={onChange}
        className="form__rating-input visually-hidden"
        name="rating" id={`star-${starValue}`} value={starValue} type="radio" checked = {+starValue === +rating}/>
      <label htmlFor={`star-${starValue}`} className="form__rating-label">
        <svg className="form__star-image" width="28" height="28">
          <use xlinkHref="img/sprite.svg#star"></use>
        </svg>
      </label>
    </>
  );
};

ReviewStar.propTypes = {
  starValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.string,
};

export default ReviewStar;
