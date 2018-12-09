import React from "react";
import { storiesOf } from "@storybook/react";
import CurrencyTable from "./index";

export const defaultRows = [
  {
    symbol: "$",
    currency: "USD",
    currentRate: 1.001,
    previousRate: 1.0
  },
  {
    symbol: "£",
    currency: "GBP",
    currentRate: 1.2,
    previousRate: 1.2
  },
  {
    symbol: "€",
    currency: "EUR",
    currentRate: 0.9,
    previousRate: 1.0
  }
];

storiesOf("CurrencyTable", module)
  .add("default", () => <CurrencyTable rows={defaultRows} />)
  .add("loading", () => <CurrencyTable loading rows={[]} />)
  .add("empty", () => <CurrencyTable rows={[]} />);
