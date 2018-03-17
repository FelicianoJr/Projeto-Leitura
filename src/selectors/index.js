import { createSelector } from "reselect";

const getFilter = state => state.filterPost;
const getPost = state => state.post;

export const getMakeFilterPost = () => {
  return createSelector([getFilter, getPost], (filterPost, post) => {
    switch (filterPost.value) {
      case "SCORE_BIGGER":
        return post.slice().sort((a, b) => a.voteScore < b.voteScore);
      case "SCORE_SMALLER":
        return post.slice().sort((a, b) => a.voteScore > b.voteScore);
      case "RECENT_POST":
        return post.slice().sort((a, b) => a.timestamp < b.timestamp);
      case "OLD_POST":
        return post.slice().sort((a, b) => a.timestamp > b.timestamp);
      case "DELETEDI":
        return post.filter(post => post.deleted !== filterPost.deleted);
      default:
        return post;
    }
  });
};

const getFilters = state => state.filterComment;
const getComment = state => state.comment;

export const getMakeFilterComment = () => {
  return createSelector([getFilters, getComment], (filterComment, comment) => {
    switch (filterComment.value) {
      case "DELETED":
        return comment.filter(comm => comm.deleted !== filterComment.deleted);
      case "PARENT_DELETED":
        return comment.filter(comm => comm.parentDeleted !== filterComment.deleted);
      default:
        return comment; //.slice().sort((a, b) => a.voteScore < b.voteScore);
    }
  });
};
