import reducer from "./base";
import { SET_BASE } from "../actionTypes";

it("should return state", () => {
  expect(reducer("", { type: "foobar" })).toEqual("");
});

it("should handle SET_BASE", () => {
  expect(
    reducer("", {
      type: SET_BASE,
      payload: "EUR"
    })
  ).toEqual("EUR");
});
