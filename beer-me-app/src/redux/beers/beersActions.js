import axios from "axios";
import { defaultBeersGET } from "../../api";

export const loadBeers = () => async (dispatch) => {
  const defaultBeersData = await axios.get(defaultBeersGET());

  dispatch({
    type: "FETCH_BEERS",
    payload: {
      default: defaultBeersData,
    },
  });
};
