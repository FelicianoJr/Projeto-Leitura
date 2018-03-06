import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
  GET_COMMENT_ID,
  GET_POST_ID_COMMENT
} from "../constants/ActionTypes";

const comment = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: action.comment.id,
          timestamp: action.comment.timestamp,
          body: action.comment.body,
          parentId: action.comment.parentId,
          author: action.comment.author
        }
      ];

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.comment.id);

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

    case GET_COMMENT_ID:
      return [...action.comment];

    case GET_POST_ID_COMMENT:
      return getComments(getState(state, action));

    default:
      return state;
  }
};

export const getIdComment = comment => comment.id;

const getState = (state, action) => state.concat(action.comment);

const getComments = state =>
  state.filter((item, comm) => getIds(state).indexOf(item.id) === comm);

const getIds = state => state.map(comment => comment.id);

export default comment;
