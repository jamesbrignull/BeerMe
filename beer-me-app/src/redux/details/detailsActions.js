import axios from "axios";

import { beerDetailsGET } from "../../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  const detailsData = await axios.get(beerDetailsGET(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      beer: detailsData.data,
    },
  });
};
