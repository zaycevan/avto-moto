import {ActionType} from './action';
import {extend} from '../util';
import {TabIdentifier} from '../const';

const initialState = {
  activeTab: TabIdentifier.CHARACTERISTICS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_TAB:
      return extend(state, {
        activeTab: action.payload,
      });
  }

  return state;
};

export {reducer};
