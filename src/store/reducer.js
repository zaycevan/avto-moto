import {ActionType} from './action';
import {extend} from '../util';
import {TabIdentifier} from '../const';

const initialState = {
  activeTab: TabIdentifier.CHARACTERISTICS,
  reviews: [],
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
