import React from "react";
import { shallow } from "enzyme";
import { ExchangeRates } from "./index";
import CurrencyTable from "components/CurrencyTable";
import CurrencySelect from "components/CurrencySelect";
import Modal from "components/Modal";
import CurrencyHeader from "components/CurrencyHeader";

function setup() {
  const props = {
    getExchangeData: jest.fn(),
    setPreviousRates: jest.fn(),
    setBase: jest.fn(),
    availableRates: {},
    base: ""
  };

  const wrapper = shallow(<ExchangeRates {...props} />);

  return {
    props,
    wrapper
  };
}

it("should render a container and child components", () => {
  const { wrapper } = setup();
  expect(wrapper.find(".container")).toHaveLength(1);
  expect(wrapper.find(CurrencyHeader)).toHaveLength(1);
  expect(wrapper.find(CurrencySelect)).toHaveLength(1);
  expect(wrapper.find(CurrencyTable)).toHaveLength(1);
});

it("should display Modal", () => {
  const { wrapper } = setup();
  wrapper.setState({ modal: { show: true, msg: "foo" } });
  expect(wrapper.find(Modal)).toHaveLength(1);
});
