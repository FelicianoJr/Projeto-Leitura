import { ALL_CATEGORY } from "../constants/ActionTypes";

const categories = (state = [], action) => {
  switch (action.type) {
    case ALL_CATEGORY:
      return [...action.categories];
      
    default:
      return state;
  }
};

export default categories;
