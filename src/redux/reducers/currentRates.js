import { SET_EXCHANGE_RATES } from '../actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXCHANGE_RATES: {
      const { base, date, rates } = action.payload;

      return {
        ...state,
        [base]: {
          date,
          ...rates
        }
      };
    }

    default:
      return state;
  }
}
