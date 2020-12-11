const INITIAL_STATE = {
  starter: [],
  strong: [],
  bitter: [],
};

export const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BEERS":
      return {
        ...state,
        starter: action.payload.starter,
        strong: action.payload.strong,
        bitter: action.payload.bitter,
      };
    default:
      return { ...state };
  }
};
