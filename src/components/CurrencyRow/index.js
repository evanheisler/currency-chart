import React from 'react';
import PropTypes from 'prop-types';

const CurrencyRow = ({
  data: { symbol, currency, currentRate, previousRate },
  sample
}) => {
  return (
    <div className="row table-row">
      <div className="col-4">{currency}</div>
      <div className="col-3">{currentRate}</div>
      <div className="col-2">
        {currentRate > previousRate
          ? 'up'
          : currentRate === previousRate
          ? 'equal'
          : 'less'}
      </div>
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
    previousRate: PropTypes.number.isRequired
  }),
  sample: PropTypes.string
};

CurrencyRow.defaultProps = {
  data: {
    symbol: '',
    currency: '',
    currentRate: 0,
    previousRate: 0
  },
  sample: ''
};

export default CurrencyRow;
