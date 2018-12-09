import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Loading } from 'components/LoadingIcon.svg';
import CurrencyRow from 'components/CurrencyRow';

const CurrencyTable = ({ loading, status, ...rest }) => {
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

  if (!rest.rows) {
    return (
      <React.Fragment>
        <div className="message-overlay">
          <span className="lead text-black-50 p-3">{status}</span>
        </div>
        {emptyTable}
      </React.Fragment>
    );
  }

  const data = Object.keys(rest.rows.rates).map(val => {
    return {
      symbol: '$',
      currency: val,
      currentRate: rest.rows.rates[val],
      previousRate: 1
    };
  });

  return (
    <React.Fragment>
      {data.map(row => (
        <CurrencyRow key={row.currency} data={row} />
      ))}
    </React.Fragment>
  );
};

CurrencyTable.propTypes = {
  loading: PropTypes.bool.isRequired
};

CurrencyTable.defaultProps = {
  loading: false,
  status: 'Checking Service…'
};

const mapStateToProps = state => {
  return {
    rows: state.currentRates[state.base]
  };
};

export default connect(mapStateToProps)(CurrencyTable);
