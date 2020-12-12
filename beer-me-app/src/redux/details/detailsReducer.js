const INITIAL_STATE = { beer: {} };

export const detailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return { ...state, beer: action.payload.beer };
    default:
      return { ...state };
  }
};
