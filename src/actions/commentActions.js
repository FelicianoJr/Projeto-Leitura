import commentAPI from "../api/commentAPI";
import * as types from "../constants/ActionTypes";

export const parentDeleteComment = comment => dispatch => {
  dispatch(parentDeleted(comment));
  dispatch(parentDeletedFilter(comment));
};

const parentDeleted = comment => ({
  type: types.PARENT_DELETE_COMMENT,
  comment
});

const parentDeletedFilter = comment => ({
  type: types.filters.PARENT_DELETED_COMMENT,
  comment: { deleted: true, value: "PARENT_DELETED" }
});

export const removeComment = comment => dispatch => {
  commentAPI
    .remove(comment.id)
    .then(resp => {
      dispatch(deleteComment(resp));
      dispatch(deletedFilter(resp));
      dispatch(decreaseCount(resp.parentId));
    })
    .catch(error => console.log(error));
};

const deleteComment = comment => ({
  type: types.DELETE_COMMENT,
  comment
});

const deletedFilter = comment => ({
  type: types.filters.DELETED_COMMENT,
  comment: { deleted: comment.deleted, value: "DELETED" }
});

const decreaseCount = id => ({
  type: types.DECREASE_COUNT,
  id
});

export const addComment = comment => dispatch => {
  commentAPI
    .create(comment)
    .then(resp => {
      dispatch(getCommentPost({ id: comment.parentId }));
      dispatch(increaseCount(comment.parentId));
    })
    .catch(error => console.log(error));
};

export const getCommentPost = comment => dispatch => {
  commentAPI
    .getPostIdComments(comment.id)
    .then(resp => {
      dispatch(receiveCommentForPost(resp));
    })
    .catch(error => console.log(error));
};

const receiveCommentForPost = comment => ({
  type: types.GET_POST_ID_COMMENT,
  comment
});

const increaseCount = id => ({
  type: types.INCREASE_COUNT,
  id
});

export const getIdComment = comment => dispatch => {
  commentAPI
    .getId(comment.id)
    .then(resp => {
      dispatch(receiveIdComment(resp));
    })
    .catch(error => console.log(error));
};

const receiveIdComment = comment => ({
  type: types.GET_COMMENT_ID,
  comment
});

export const voteComment = comment => dispatch => {
  commentAPI
    .vote(comment)
    .then(resp => {
      dispatch(sendVoteComment(resp));
    })
    .catch(error => console.log(error));
};

const sendVoteComment = comment => ({
  type: types.VOTE_COMMENT,
  comment
});

export const editComment = comment => dispatch => {
  commentAPI
    .edit(comment)
    .then(resp => {
      dispatch(edit(resp));
    })
    .catch(error => console.log(error));
};

const edit = comment => ({
  type: types.EDIT_COMMENT,
  comment
});
