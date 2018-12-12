import React from "react";
import { shallow } from "enzyme";
import CurrencyHeader from "./index";

it("renders a row", () => {
  const wrapper = shallow(<CurrencyHeader />);
  expect(wrapper.find(".row")).toHaveLength(1);
});

it("has 4 columns", () => {
  const wrapper = shallow(<CurrencyHeader />);
  const row = wrapper.find(".row").children();
  expect(row).toHaveLength(4);
});
