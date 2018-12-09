import React from "react";
import { shallow } from "enzyme";
import CurrencyTable from "./index";

it("renders an empty state", () => {
  const wrapper = shallow(
    <CurrencyTable loading={false} status="No Results" />
  );

  expect(wrapper.find(".message-overlay").text()).toBe("No Results");
});
