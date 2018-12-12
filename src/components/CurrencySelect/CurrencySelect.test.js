import React from "react";
import { shallow } from "enzyme";
import CurrencySelect from "./index";

it("renders a default option", () => {
  const wrapper = shallow(<CurrencySelect options={[]} />);
  expect(wrapper.find("select").children()).toHaveLength(1);
});

it("includes EUR", () => {
  const wrapper = shallow(<CurrencySelect options={["USD"]} />);
  expect(
    wrapper
      .find("select")
      .childAt(1)
      .text()
  ).toEqual("EUR");
});

it("can change the value", () => {
  const change = jest.fn();
  const wrapper = shallow(<CurrencySelect options={[]} change={change} />);
  wrapper.find("select").simulate("change", { target: { value: "foo" } });
  expect(change).toBeCalled();
});
