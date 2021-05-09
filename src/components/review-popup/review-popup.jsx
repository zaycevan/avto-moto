import React from 'react';
import ReviewStar from '../review-star/review-star';

const ReviewPopup = () => {
  return (
    <section className="review-popup">
      <div className="review-popup__wrapper">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <form className="review-popup__form form" method="post">
          <label className="form__label" htmlFor="inputName">
            <input className="form__input-name" id="inputName" name="inputName" type="text" placeholder="Имя"/>
          </label>
          <label className="form__label" htmlFor="inputAdvantages">
            <input className="form__input-advantages" id="inputAdvantages" name="inputAdvantages" type="text" placeholder="Достоинства"/>
          </label>
          <label className="form__label" htmlFor="inputDisadvantages">
            <input className="form__input-disadvantages" id="inputDisadvantages" name="inputDisadvantages" type="text" placeholder="Недостатки"/>
          </label>
          <label className="form__label" htmlFor="inputDisadvantages">
            <input className="form__input-disadvantages" id="inputDisadvantages" name="inputDisadvantages" type="text" placeholder="Недостатки"/>
          </label>
          <label className="form__label" htmlFor="inputComment">
            <textarea className="form__input-comment" id="inputComment" name="inputComment" placeholder="Комментарий" maxLength={300} minLength={10}></textarea>
          </label>
          <div className="form__rating">
            <p className="form__rating-text">Оцените товар:</p>
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
          </div>
          <button className="form__submit button" type="submit">оставить отзыв</button>
        </form>
        <button className="review-popup__close">
          <svg className="review-popup__close-image" width="15" height="15">
            <use xlinkHref="img/sprite.svg#close"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ReviewPopup;
