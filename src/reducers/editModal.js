import {
  EDIT_POST_MODAL,
  EDIT_COMMENT_MODAL,
  NEW_COMMENT_MODAL
} from "../constants/ActionTypes";

const editModal = (state = [], action) => {
  switch (action.type) {
    case EDIT_POST_MODAL:
      return { post: action.post };
    case EDIT_COMMENT_MODAL:
      return { comment: action.comment };
    case NEW_COMMENT_MODAL:
      return { comment: action.comment };
    default:
      return state;
  }
};

export default editModal;
