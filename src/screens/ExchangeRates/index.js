import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExchangeRates, setBase, getExchangeData } from 'redux/actions';
import CurrencyTable from 'components/CurrencyTable';
import CurrencySelect from 'components/CurrencySelect';
import Modal from 'components/Modal';

class ExchangeRates extends Component {
  state = {
    status: '',
    loading: false,
    currencies: [],
    modal: {
      show: false,
      msg: ''
    }
  };

  componentDidMount() {
    this.setState(
      {
        loading: true,
        status: 'Checking Service…'
      },
      () => {
        getExchangeData()
          .then(res => {
            this.setState({
              loading: false,
              currencies: Object.keys(res.rates).map(cur => cur),
              status: 'Please select a base currency'
            });
          })
          .catch(err => {
            this.setState({
              loading: false,
              modal: {
                show: true,
                msg:
                  'Sorry we are having trouble connecting or that currency is not available. Please try again.'
              }
            });
          });
      }
    );
  }

  handleCurrencyChange = base => {
    if (this.props.availableRates[base]) {
      this.props.setBase(base);
    } else {
      getExchangeData(base).then(resp => {
        this.props.setExchangeRates(resp);
        this.props.setBase(base);
      });
    }
  };

  render() {
    const { loading, status, currencies, modal } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row mt-5 mb-2">
              <div className="col-4 ml-auto pr-0 text-right">
                <CurrencySelect
                  options={currencies}
                  change={this.handleCurrencyChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto py-5 bg-white rounded">
            <CurrencyTable loading={loading} status={status} />
          </div>
        </div>
        {modal.show && (
          <Modal
            msg={modal.msg}
            action={() => window.location.reload()}
            actionLabel="Refresh"
            dismiss={() => {
              this.setState(prevState => ({
                modal: {
                  show: !prevState.modal.show
                }
              }));
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableRates: state.currentRates
});

export default connect(
  mapStateToProps,
  { setExchangeRates, setBase }
)(ExchangeRates);
