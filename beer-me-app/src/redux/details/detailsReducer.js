const INITIAL_STATE = { beer: {}, isLoading: true };

export const detailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return { ...state, beer: action.payload.beer, isLoading: false };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
