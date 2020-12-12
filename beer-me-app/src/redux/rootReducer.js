import { combineReducers } from "redux";
import { beersReducer } from "./beers/beersReducer";
import { detailsReducer } from "./details/detailsReducer";

export const rootReducer = combineReducers({
  beers: beersReducer,
  details: detailsReducer,
});
