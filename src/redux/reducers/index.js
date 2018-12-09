import { combineReducers } from 'redux';
import currentRates from './currentRates';
import base from './base';

export default combineReducers({
  base,
  currentRates
});
