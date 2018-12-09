import {
  SET_EXCHANGE_RATES,
  SET_BASE,
  SET_PREV_EXCHANGE_RATES
} from "./actionTypes";
import { handleJSONResponse } from "utils";

export const setExchangeRates = data => ({
  type: SET_EXCHANGE_RATES,
  payload: {
    ...data
  }
});

export const setPreviousRates = data => ({
  type: SET_PREV_EXCHANGE_RATES,
  payload: {
    ...data
  }
});

export const setBase = base => ({
  type: SET_BASE,
  payload: base
});

export const getExchangeData = (cur = "EUR", date = "latest") => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.exchangeratesapi.io/${date}?base=${cur}`)
      .then(handleJSONResponse)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(new Error(err));
      });
  });
};
