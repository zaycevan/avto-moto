import React from 'react';
import {formatCommentDate} from '../../util';
import {reviewPropType} from "./review.prop-type";
import {RatingValue} from '../../const';

const Review = (props) => {
  const {review} = props;
  const {
    id,
    userName,
    advantages,
    disadvantages,
    comment,
    rating,
    date
  } = review;

  return (
    <li className="reviews__item review" id={id}>
      <p className="review__user">{userName}</p>
      <div className="review__advantages">
        <p className="review__title">Достоинства</p>
        <p className="review__text">{advantages}</p>
      </div>
      <div className="review__disadvantages">
        <p className="review__title">Недостатки</p>
        <p className="review__text">{disadvantages}</p>
      </div>
      <div className="review__comment">
        <p className="review__title">Комментарий</p>
        <p className="review__text">{comment}</p>
      </div>
      <div className="review__rating rating">
        <ul className="rating__stars">
          {RatingValue.map((item, i) => (
            <li key={`${i}-${item}`}>
              <svg className={`rating__star-image
                ${item <= rating ? `active` : ``}`} width="17" height="17">
                <use xlinkHref="img/sprite.svg#star"></use>
              </svg>
            </li>
          ))}
        </ul>
        <p className="rating__text">Советует</p>
      </div>
      <span className="review__time">{formatCommentDate(date)}</span>
      <button className="review__reply"aria-label="Ответить">Ответить</button>
    </li>
  );
};

Review.propTypes = {
  review: reviewPropType,
};

export default Review;
