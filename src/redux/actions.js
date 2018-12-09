import { SET_EXCHANGE_RATES } from './actionTypes';

export const setExchangeRates = data => ({
  type: SET_EXCHANGE_RATES,
  payload: {
    ...data
  }
});
