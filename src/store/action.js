export const ActionType = {
  CHANGE_ACTIVE_TAB: `CHANGE_ACTIVE_TAB`,
  SHOW_REVIEW_POPUP: `SHOW_REVIEW_POPUP`,
  SAVE_REVIEW: `SAVE_REVIEW`,
};

export const ActionCreator = {
  changeActiveTab: (activeTab) => ({
    type: ActionType.CHANGE_ACTIVE_TAB,
    payload: activeTab,
  }),
  saveReview: (review) => ({
    type: ActionType.SAVE_REVIEW,
    payload: review,
  }),
  showReviewPopup: (showStatus) => ({
    type: ActionType.SHOW_REVIEW_POPUP,
    payload: showStatus,
  }),
};
