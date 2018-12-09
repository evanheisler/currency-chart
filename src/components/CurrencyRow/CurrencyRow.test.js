import React from "react";
import { shallow } from "enzyme";
import CurrencyRow from "./index";

it("renders a row", () => {
  const wrapper = shallow(<CurrencyRow />);
  expect(wrapper.find(".row")).toHaveLength(1);
});

it("has 4 columns", () => {
  const wrapper = shallow(<CurrencyRow />);
  const row = wrapper.find(".row").children();
  expect(row).toHaveLength(4);
});
