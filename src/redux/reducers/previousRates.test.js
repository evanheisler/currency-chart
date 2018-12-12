import reducer from "./previousRates";
import { SET_PREV_EXCHANGE_RATES } from "../actionTypes";

it("should return state", () => {
  expect(reducer("", { type: "foobar" })).toEqual("");
});

it("should handle SET_PREV_EXCHANGE_RATES", () => {
  const payload = {
    base: "foo",
    date: "2018-12-07",
    rates: {}
  };

  expect(
    reducer(
      {},
      {
        type: SET_PREV_EXCHANGE_RATES,
        payload
      }
    )
  ).toEqual({
    foo: {
      date: "2018-12-07",
      rates: {}
    }
  });
});
