import { combineReducers } from "redux";
import currentRates from "./currentRates";
import previousRates from "./previousRates";
import base from "./base";

export default combineReducers({
  base,
  currentRates,
  previousRates
});
