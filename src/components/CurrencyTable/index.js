import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Loading } from 'components/LoadingIcon.svg';
import CurrencyRow from 'components/CurrencyRow';

const CurrencyTable = ({ loading, rows, status }) => {
  let emptyTable = [];
  for (let i = 0; i < 5; i++) {
    emptyTable.push(<div key={i} className="row table-row" />);
  }

  if (loading) {
    return (
      <React.Fragment>
        <div className="message-overlay">
          <Loading />
        </div>
        {emptyTable}
      </React.Fragment>
    );
  }

  if (rows.length === 0) {
    return (
      <React.Fragment>
        <div className="message-overlay">
          <span className="lead text-black-50 p-3">{status}</span>
        </div>
        {emptyTable}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {rows.map(row => (
        <CurrencyRow key={row.symbol} data={row} />
      ))}
    </React.Fragment>
  );
};

CurrencyTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  rows: PropTypes.array.isRequired
};

CurrencyTable.defaultProps = {
  loading: false,
  status: 'Checking Service…'
};

export default CurrencyTable;
