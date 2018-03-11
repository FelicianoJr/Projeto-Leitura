import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_ALL_POST_CATEGORY,
  VOTE_POST,
  GET_ALL_POST,
  SORT_POST,
  DECREASE_COUNT,
  INCREASE_COUNT
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

    case GET_ALL_POST_CATEGORY:
      return [...action.post];

    case GET_ALL_POST:
      return [...action.post.sort((a, b) => a.voteScore < b.voteScore)];

    case DELETE_POST:
      return state.filter(post => post.id !== action.post.id);

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

    case SORT_POST:
      switch (action.atributes) {
        case "SCORE_SMALLER":
          return state.slice().sort((a, b) => a.voteScore > b.voteScore);

        case "SCORE_BIGGER":
          return state.slice().sort((a, b) => a.voteScore < b.voteScore);

        case "RECENT_POST":
          return state.slice().sort((a, b) => a.timestamp < b.timestamp);

        case "OLD_POST":
          return state.slice().sort((a, b) => a.timestamp > b.timestamp);
        default:
          return state;
      }

    default:
      return state;
  }
};

export default post;
