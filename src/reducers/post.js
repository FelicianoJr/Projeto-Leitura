import {
  ADD_POST,
  EDIT_POST,
  GET_ALL_POST_CATEGORY,
  VOTE_POST,
  GET_ALL_POST,
  DECREASE_COUNT,
  INCREASE_COUNT,
  GET_POST_ID,
  DELETE_POST
} from "../constants/ActionTypes";

const post = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: action.post.id,
          timestamp: action.post.timestamp,
          title: action.post.title,
          body: action.post.body,
          category: action.post.category,
          author: action.post.author,
          commentCount: action.post.commentCount,
          voteScore: action.post.voteScore
        }
      ];

    case DELETE_POST:
      return state.map(
        post =>
          post.id === action.post.id
            ? {
                ...post,
                deleted: action.post.deleted
              }
            : post
      );

    case GET_ALL_POST_CATEGORY:
      return [...action.post];

    case GET_ALL_POST:
      return [...action.post];

    case GET_POST_ID:
      return [...action.post];

    case EDIT_POST:
      return state.map(
        post =>
          post.id === action.post.id
            ? {
                ...post,
                title: action.post.title,
                body: action.post.body
              }
            : post
      );

    case VOTE_POST:
      return state.map(
        post =>
          post.id === action.post.id
            ? {
                ...post,
                voteScore: action.post.voteScore
              }
            : post
      );
    case DECREASE_COUNT:
      return state.map(
        post =>
          post.id === action.id
            ? { ...post, commentCount: post.commentCount - 1 }
            : post
      );
    case INCREASE_COUNT:
      return state.map(
        post =>
          post.id === action.id
            ? { ...post, commentCount: post.commentCount + 1 }
            : post
      );
    default:
      return state;
  }
};

export default post;
