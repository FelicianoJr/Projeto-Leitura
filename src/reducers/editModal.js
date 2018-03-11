import { POST_MODAL, COMMENT_MODAL } from "../constants/ActionTypes";

const editModal = (state = [], action) => {
  switch (action.type) {
    case POST_MODAL:
      return { post: action.post };
    case COMMENT_MODAL:
      return { comment: action.comment };
    default:
      return state;
  }
};

export default editModal;
