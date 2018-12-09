import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExchangeRates } from 'redux/actions';
import CurrencyTable from 'components/CurrencyTable';

class ExchangeRates extends Component {
  state = {
    loading: false,
    rates: []
  };

  componentDidMount() {
    fetch(`https://api.exchangeratesapi.io/latest?base=EUR`)
      .then(resp => resp.json())
      .then(resp => {
        this.props.setExchangeRates(resp);
      });
  }

  render() {
    const { loading, rates } = this.state;

    return (
      <div>
        <CurrencyTable loading={loading} rows={rates} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRates: state.currentRates
  };
};

export default connect(
  mapStateToProps,
  { setExchangeRates }
)(ExchangeRates);
