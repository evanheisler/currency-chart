import * as actions from "./actions";
import * as types from "./actionTypes";

it("should set exchange rates", () => {
  const data = {
    date: "2018-12-10",
    rates: {}
  };
  const expectedAction = {
    type: types.SET_EXCHANGE_RATES,
    payload: {
      ...data
    }
  };

  expect(actions.setExchangeRates(data)).toEqual(expectedAction);
});

it("should set previous exchange rates", () => {
  const data = {
    date: "2018-12-07",
    rates: {}
  };
  const expectedAction = {
    type: types.SET_PREV_EXCHANGE_RATES,
    payload: {
      ...data
    }
  };

  expect(actions.setPreviousRates(data)).toEqual(expectedAction);
});

it("should set base exchange", () => {
  const expectedAction = {
    type: types.SET_BASE,
    payload: "USD"
  };

  expect(actions.setBase("USD")).toEqual(expectedAction);
});
