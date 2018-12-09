import { SET_EXCHANGE_RATES, SET_BASE } from './actionTypes';
import { handleJSONResponse } from 'utils';

export const setExchangeRates = data => ({
  type: SET_EXCHANGE_RATES,
  payload: {
    ...data
  }
});

export const setBase = base => ({
  type: SET_BASE,
  payload: base
});

export const getExchangeData = (cur = 'EUR') => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${cur}`)
      .then(handleJSONResponse)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(new Error(err));
      });
  });
};
