export const ActionType = {
  CHANGE_ACTIVE_TAB: `CHANGE_ACTIVE_TAB`,
};

export const ActionCreator = {
  changeActiveTab: (activeTab) => ({
    type: ActionType.CHANGE_ACTIVE_TAB,
    payload: activeTab,
  }),
};
