import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Loading } from 'components/LoadingIcon.svg';
import CurrencyRow from 'components/CurrencyRow';

const CurrencyTable = ({ loading, rows }) => {
  let emptyTable = [];
  for (let i = 0; i < 5; i++) {
    emptyTable.push(<div key={i} className="row table-row" />);
  }

  if (loading) {
    return (
      <div className="container">
        {emptyTable}
        <Loading />
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="container">
        <div className="message-overlay">No Results</div>
        {emptyTable}
      </div>
    );
  }

  return (
    <div className="container">
      {rows.map(row => (
        <CurrencyRow key={row.symbol} data={row} />
      ))}
    </div>
  );
};

CurrencyTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  rows: PropTypes.array.isRequired
};

CurrencyTable.defaultProps = {
  loading: false
};

export default CurrencyTable;
