import React, { Component } from 'react';
import CurrencyTable from 'components/CurrencyTable';

class ExchangeRates extends Component {
  state = {
    loading: false,
    rates: []
  };

  render() {
    const { loading, rates } = this.state;

    return (
      <div>
        <CurrencyTable loading={loading} rows={rates} />
      </div>
    );
  }
}

export default ExchangeRates;
