import commentAPI from "../api/commentAPI";
import * as types from "../constants/ActionTypes";
import { decreaseCountComment, increaseCountComment } from "./postActions";

const removeComment = comment => ({
  type: types.DELETE_COMMENT,
  comment
});

export const deleteComment = comment => dispatch => {
  commentAPI
    .remove(comment.id)
    .then(resp => {
      dispatch(removeComment(resp));
      dispatch(decreaseCountComment(resp.parentId));
    })
    .catch(error => console.log(error));
};

const add = comment => ({
  type: types.ADD_COMMENT,
  comment
});

export const addComment = comment => dispatch => {
  commentAPI
    .create(comment)
    .then(resp => {
      dispatch(add(resp));
      dispatch(increaseCountComment(comment.parentId));
    })
    .catch(error => console.log(error));
};

const receiveIdComment = comment => ({
  type: types.GET_COMMENT_ID,
  comment
});

export const getIdComment = comment => dispatch => {
  commentAPI
    .getId(comment.id)
    .then(resp => {
      dispatch(receiveIdComment(resp));
    })
    .catch(error => console.log(error));
};

const receiveCommentForPost = comment => ({
  type: types.GET_POST_ID_COMMENT,
  comment
});

export const getCommentPost = comment => dispatch => {
  commentAPI
    .getPostIdComments(comment.id)
    .then(resp => {
      dispatch(receiveCommentForPost(resp));
    })
    .catch(error => console.log(error));
};

const sendVoteComment = comment => ({
  type: types.VOTE_COMMENT,
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

const editSingle = comment => ({
  type: types.EDIT_COMMENT,
  comment
});

export const editComment = comment => dispatch => {
  commentAPI
    .edit(comment)
    .then(resp => {
      dispatch(editSingle(resp));
    })
    .catch(error => console.log(error));
};
