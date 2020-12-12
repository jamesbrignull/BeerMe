import axios from "axios";

import { beerDetailsGET } from "../../api";

export const loadDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(beerDetailsGET(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      beer: detailsData.data,
    },
  });
};
