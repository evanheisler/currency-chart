import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "components/Arrow.svg";

const CurrencyRow = ({
  data: { symbol, currency, currentRate, previousRate },
  sample
}) => {
  let trending = "---";
  if (previousRate !== null) {
    trending =
      currentRate > previousRate ? (
        <Arrow />
      ) : currentRate === previousRate ? (
        "---"
      ) : (
        <Arrow className="down" />
      );
  }

  return (
    <div className="row table-row">
      <div className="col-4">{currency}</div>
      <div className="col-3">{currentRate}</div>
      <div className="col-2 trending">{trending}</div>
      <div className="col-3">{`${symbol}${(
        parseInt(sample, 10) * currentRate
      ).toFixed(2)}`}</div>
    </div>
  );
};

CurrencyRow.propTypes = {
  data: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    currentRate: PropTypes.number.isRequired,
    previousRate: PropTypes.number
  }),
  sample: PropTypes.string
};

CurrencyRow.defaultProps = {
  data: {
    symbol: "",
    currency: "",
    currentRate: 0,
    previousRate: 0
  },
  sample: ""
};

export default CurrencyRow;
