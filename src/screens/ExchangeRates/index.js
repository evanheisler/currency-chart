import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setExchangeRates,
  setPreviousRates,
  setBase,
  getExchangeData
} from "redux/actions";
import CurrencyTable from "components/CurrencyTable";
import CurrencySelect from "components/CurrencySelect";
import Modal from "components/Modal";
import CurrencyHeader from "components/CurrencyHeader";

class ExchangeRates extends Component {
  state = {
    status: "",
    loading: false,
    currencies: [],
    modal: {
      show: false,
      msg: ""
    },
    conversionValue: 1500
  };

  componentDidMount() {
    this.setState(
      {
        loading: true,
        status: "Checking Service…"
      },
      () => {
        getExchangeData()
          .then(res => {
            this.setState({
              loading: false,
              currencies: Object.keys(res.rates).map(cur => cur),
              status: "Please select a base currency"
            });
          })
          .catch(() => {
            this.setState({
              loading: false,
              modal: {
                show: true,
                msg:
                  "Sorry we are having trouble connecting or that currency is not available. Please try again."
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
      getExchangeData(base).then(currentData => {
        let previousDate = new Date(currentData.date);
        previousDate.setDate(previousDate.getDate() - 1);
        previousDate = previousDate.toISOString().split("T")[0];

        getExchangeData(base, previousDate)
          .then(prevData => {
            this.props.setPreviousRates(prevData);
          })
          .then(() => {
            this.props.setExchangeRates(currentData);
            this.props.setBase(base);
          });
      });
    }
  };

  handleConversionValue = e => {
    this.setState({
      conversionValue: parseInt(e.target.value, 10)
    });
  };

  render() {
    const { loading, status, currencies, modal, conversionValue } = this.state;

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
          <div className="col-10 mx-auto mb-5 pb-5 bg-white rounded">
            <CurrencyHeader
              base={this.props.base}
              conversionValue={conversionValue}
              change={this.handleConversionValue}
            />

            <CurrencyTable
              loading={loading}
              status={status}
              conversionValue={conversionValue}
            />
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
  availableRates: state.currentRates,
  base: state.base
});

export default connect(
  mapStateToProps,
  { setExchangeRates, setPreviousRates, setBase }
)(ExchangeRates);
