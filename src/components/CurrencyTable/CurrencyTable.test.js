import React from "react";
import { shallow } from "enzyme";
import { CurrencyTable } from "./index";
import { ReactComponent as Loading } from "components/LoadingIcon.svg";
import CurrencyRow from "components/CurrencyRow";

const store = {
  rows: {
    rates: {
      USD: 1.2,
      EUR: 1.5
    }
  },
  previous: {
    rates: {
      USD: 1.0,
      EUR: 1.2
    }
  }
};

it("renders an empty state", () => {
  const wrapper = shallow(
    <CurrencyTable loading={false} status="No Results" />
  );

  expect(wrapper.find(".message-overlay").text()).toEqual("No Results");
});

it("renders a loading state", () => {
  const wrapper = shallow(<CurrencyTable loading />);
  expect(wrapper.find(Loading)).toHaveLength(1);
});

it("renders currency rows", () => {
  const wrapper = shallow(<CurrencyTable {...store} />);
  expect(wrapper.find(CurrencyRow)).toHaveLength(2);
});
