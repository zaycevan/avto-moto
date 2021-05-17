import {ActionType} from './action';
import {extend} from '../util';
import {TabIdentifier} from '../const';

const initialState = {
  activeTab: TabIdentifier.CHARACTERISTICS,
  reviews: [
    {
      id: `5/18/2021, 1:16:40 AM`,
      userName: `Борис Иванов`,
      advantages: `мощность, внешний вид`,
      disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
      comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
      rating: `3`,
      date: new Date(Date.now() - 1000 * 60),
    },
    {
      id: `5/18/2021, 1:27:40 AM`,
      userName: `Марсель Исмагилов`,
      advantages: `Cтиль, комфорт, управляемость`,
      disadvantages: ` Дорогой ремонт и обслуживание`,
      comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
      rating: `3`,
      date: new Date(Date.now() - 1000 * 60),
    },
  ],
  reviewPopupShown: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload,
      });
    case ActionType.SAVE_REVIEW:
      const newReviews = state.reviews.slice();
      newReviews.unshift(action.payload);
      return extend(state, {
        reviews: newReviews,
      });
    case ActionType.SHOW_REVIEW_POPUP:
      return extend(state, {
        reviewPopupShown: action.payload,
      });
  }

  return state;
};

export {reducer};
