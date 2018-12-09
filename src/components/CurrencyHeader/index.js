import React from "react";
import PropTypes from "prop-types";
import getSymbolFromCurrency from "currency-symbol-map";

const CurrencyHeader = ({ base, conversionValue, change }) => {
  return (
    <div className="row table-heading">
      <div className="col-2">Origin</div>
      <div className="col-3">Rate</div>
      <div className="col-2">Trending</div>
      <div className="col-4 offset-md-1">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {getSymbolFromCurrency(base)}
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            value={conversionValue}
            onChange={change}
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrencyHeader.propTypes = {
  base: PropTypes.string.isRequired,
  conversionValue: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired
};

export default CurrencyHeader;
