import React from "react";
import { shallow } from "enzyme";
import CurrencySelect from "./index";

it("renders a default option", () => {
  const wrapper = shallow(<CurrencySelect options={[]} />);
  expect(wrapper.find("select").children()).toHaveLength(1);
});
