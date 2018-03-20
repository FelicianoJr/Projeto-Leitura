import { filters } from "../constants/ActionTypes";

const filterPost = (state = [], action) => {
  switch (action.type) {
    case filters.SORT_POST:
      return action.post;
    case filters.DELETED_POST:
      return action.post;
    default:
      return state;
  }
};

export default filterPost;
