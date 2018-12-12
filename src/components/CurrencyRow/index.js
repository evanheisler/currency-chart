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
      <div className="col-2 px-1">{currency}</div>
      <div className="col-3 px-1">{currentRate}</div>
      <div className="col-2 trending px-1">{trending}</div>
      <div className="col-4 offset-md-1 converted-value px-1">
        <span className="mr-1 text-muted">{symbol}</span>
        {(sample * currentRate).toFixed(2)}
      </div>
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
  sample: PropTypes.number
};

CurrencyRow.defaultProps = {
  data: {
    symbol: "",
    currency: "",
    currentRate: 0,
    previousRate: 0
  },
  sample: 0
};

export default CurrencyRow;
