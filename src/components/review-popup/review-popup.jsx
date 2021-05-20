import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import ReviewStar from '../review-star/review-star';
import {RatingValue, reviewStructure} from '../../const';
import {onSubmitPropType, onCloseButtonClickPropType} from './review-popup.prop-type';
import {ActionCreator} from '../../store/action';
import {extend} from '../../util';

const ReviewPopup = (props) => {
  const {
    onSubmit,
    onCloseButtonClick,
  } = props;

  const [review, setReview] = useState({});
  const reviewRef = useRef(review);

  useEffect(() => {
    reviewRef.current = review;
  }, [review]);

  useEffect(() => {
    let localReview = {};
    Object.keys(reviewStructure).forEach((item) => {
      let localItem = localStorage.getItem(item);
      if (localItem !== null) {
        localReview = extend(localReview, {[item]: localItem});
      }
    });
    setReview(localReview);

    return () => {

    };
  }, []);

  const onInputChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    setReview(extend(review, {[name]: value}));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const date = new Date();
    const id = date.toLocaleString();
    let reviewWithDate = extend(review, {date, id});
    onSubmit(reviewWithDate);
    onCloseButtonClick();
    localStorage.clear();
  };

  const handleCloseButtonClick = () => {
    Object.keys(reviewStructure).forEach((item) => {
      if (reviewRef.current[item]) {
        localStorage.setItem(item, reviewRef.current[item]);
      }
    });
    onCloseButtonClick();
  };

  useEffect(() => {
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        handleCloseButtonClick();
      }
    };
    const onOutsideClick = (evt) => {
      if (evt.target.classList.contains(`review-popup`)) {
        evt.preventDefault();
        handleCloseButtonClick();
      }
    };

    document.addEventListener(`keydown`, onEscKeyDown);
    document.addEventListener(`click`, onOutsideClick);
    return () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
      document.removeEventListener(`click`, onOutsideClick);
    };
  }, []);

  return (
    <section className="review-popup">
      <div className="review-popup__wrapper">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <form className="review-popup__form form"
          onSubmit={handleSubmit}>
          <div className="form__inputs-wrapper">
            <div className="form__inputs-wrapper--left">
              <p className="form__input-text">Пожалуйста, заполните поле</p>
              <label className="form__label" htmlFor="inputName">
                <input className="form__input-name" id="inputName" name="userName" value={review.userName || ``} onChange={onInputChange} type="text" required autoFocus placeholder="* Имя"/>
              </label>
              <label className="form__label" htmlFor="inputAdvantages">
                <input className="form__input-advantages" id="inputAdvantages" name="advantages"
                  value={review.advantages || ``} onChange={onInputChange}
                  type="text" placeholder="Достоинства"/>
              </label>
              <label className="form__label" htmlFor="inputDisadvantages">
                <input className="form__input-disadvantages" id="inputDisadvantages" name="disadvantages"
                  value={review.disadvantages || ``} onChange={onInputChange}
                  type="text" placeholder="Недостатки"/>
              </label>
            </div>
            <div className="form__inputs-wrapper--right">
              <div className="form__rating">
                <p className="form__rating-text">Оцените товар:</p>
                <div className="form__rating-stars">
                  {RatingValue.map((item, i) => (
                    <ReviewStar
                      key={`${i}-${review.rating}`}
                      starValue={item}
                      onChange={onInputChange}
                      rating={review.rating || ``}
                    />
                  ))}
                </div>
              </div>
              <label className="form__label" htmlFor="inputComment">
                <textarea className="form__input-comment" id="inputComment" name="comment"
                  value={review.comment || ``} onChange={onInputChange}
                  required placeholder="* Комментарий" minLength={5}></textarea>
              </label>
            </div>
          </div>
          <button className="form__submit button" type="submit" aria-label="Оставить отзыв">оставить отзыв</button>
        </form>
        <button className="review-popup__close"
          onClick={handleCloseButtonClick} aria-label="Закрыть окно с отзывом">
          <svg className="review-popup__close-image" width="15" height="15">
            <use xlinkHref="img/sprite.svg#close"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};

ReviewPopup.propTypes = {
  onSubmit: onSubmitPropType,
  onCloseButtonClick: onCloseButtonClickPropType,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review) {
    dispatch(ActionCreator.saveReview(review));
  },
  onCloseButtonClick() {
    dispatch(ActionCreator.showReviewPopup(false));
  }
});

export {ReviewPopup};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPopup);
