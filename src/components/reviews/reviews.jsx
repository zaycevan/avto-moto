import React from 'react';
import {connect} from 'react-redux';
import Review from '../review/review';
import ReviewPopup from '../review-popup/review-popup';
import {reviewsPropType, reviewPopupShownPropType, onReviewEnterClickPropType} from './reviews.prop-type';
import {ActionCreator} from '../../store/action';

const Reviews = (props) => {
  const {
    reviews,
    reviewPopupShown,
    onReviewEnterClick,
  } = props;

  if (reviewPopupShown) {
    document.body.style.overflow = `hidden`;
  } else {
    document.body.style.overflow = `visible`;
  }

  return (
    <div className="reviews">
      <button
        className="reviews__button button"
        onClick={onReviewEnterClick}>оставить отзыв</button>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <Review
            key={item.id}
            review={item}/>
        ))}
      </ul>
      { reviewPopupShown ? <ReviewPopup /> : ``}
    </div>
  );
};

Reviews.propTypes = {
  reviews: reviewsPropType,
  reviewPopupShown: reviewPopupShownPropType,
  onReviewEnterClick: onReviewEnterClickPropType,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  reviewPopupShown: state.reviewPopupShown,
});

const mapDispatchToProps = (dispatch) => ({
  onReviewEnterClick() {
    dispatch(ActionCreator.showReviewPopup(true));
  },
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
