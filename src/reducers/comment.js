import {
  EDIT_COMMENT,
  VOTE_COMMENT,
  GET_COMMENT_ID,
  GET_POST_ID_COMMENT,
  DELETE_COMMENT,
  PARENT_DELETE_COMMENT
} from "../constants/ActionTypes";

const comment = (state = [], action) => {
  switch (action.type) {
    case VOTE_COMMENT:
      return state.map(
        comment =>
          comment.id === action.comment.id
            ? { ...comment, voteScore: action.comment.voteScore }
            : comment
      );

    case EDIT_COMMENT:
      return state.map(
        comment =>
          comment.id === action.comment.id
            ? {
                ...comment,
                timestamp: action.comment.timestamp,
                body: action.comment.body
              }
            : comment
      );

    case DELETE_COMMENT:
      return state.map(
        comment =>
          comment.id === action.comment.id
            ? {
                ...comment,
                deleted: action.comment.deleted
              }
            : comment
      );

    case PARENT_DELETE_COMMENT:
      return state.map(
        comment =>
          comment.parentId === action.comment.id
            ? {
                ...comment,
                parentDeleted: true
              }
            : comment
      );

    case GET_COMMENT_ID:
      return [...action.comment];

    case GET_POST_ID_COMMENT:
      return [...action.comment];

    default:
      return state;
  }
};

export default comment;
