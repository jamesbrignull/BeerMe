const INITIAL_STATE = {
  default: [],
};

export const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BEERS":
      return { ...state };
    default:
      return { ...state };
  }
};
