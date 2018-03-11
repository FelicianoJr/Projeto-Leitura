import { FAILED } from "../constants/ActionTypes";

const error = (state = {}, action) => {
  switch (action.type) {
    case FAILED:
      return { error: action.error.message };
    default:
      return state;
  }
};

export default error;
