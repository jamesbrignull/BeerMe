import { combineReducers } from "redux";
import { beersReducer } from "./beers/beersReducer";

export const rootReducer = combineReducers({
  beers: beersReducer,
});
