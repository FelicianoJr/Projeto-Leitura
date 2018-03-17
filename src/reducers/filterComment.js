import { filters } from "../constants/ActionTypes";

const filterComment = (state = [], action) => {
  switch (action.type) {
    case filters.DELETED_COMMENT:
      return action.comment;
    case filters.PARENT_DELETED_COMMENT:
      return action.comment;
    default:
      return state;
  }
};

export default filterComment;
