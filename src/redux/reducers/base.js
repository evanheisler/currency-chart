import { SET_BASE } from "../actionTypes";

export default function(state = "", action) {
  switch (action.type) {
    case SET_BASE: {
      return action.payload;
    }

    default:
      return state;
  }
}
