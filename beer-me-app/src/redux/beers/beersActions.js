import axios from "axios";
import { starterBeersGET, strongBeersGET, bitterBeersGET } from "../../api";

export const loadBeers = () => async (dispatch) => {
  const starterBeersData = await axios.get(starterBeersGET());
  const strongBeersData = await axios.get(strongBeersGET());
  const bitterBeersData = await axios.get(bitterBeersGET());

  dispatch({
    type: "FETCH_BEERS",
    payload: {
      starter: starterBeersData.data,
      strong: strongBeersData.data,
      bitter: bitterBeersData.data,
    },
  });
};
