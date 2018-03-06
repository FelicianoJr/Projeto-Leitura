import commentAPI from "../api/commentAPI";
import * as types from "../constants/ActionTypes";
import { getPost, getCountComment } from "./postActions";
const removeComment = comment => ({
  type: types.DELETE_COMMENT,
  comment
});

export const deleteComment = comment => dispatch => {
  commentAPI.remove(comment.id).then(resp => {
    dispatch(removeComment(resp));
    dispatch(getCountComment(resp.parentId));
  });
};

const add = comment => ({
  type: types.ADD_COMMENT,
  comment
});

export const addComment = comment => dispatch => {
  commentAPI.create(comment).then(resp => {
    dispatch(add(resp));
  });
};

const receiveIdComment = comment => ({
  type: types.GET_COMMENT_ID,
  comment
});

export const getIdComment = comment => dispatch => {
  commentAPI.getId(comment.id).then(resp => {
    dispatch(receiveIdComment(resp));
  });
};

const receiveCommentForPost = comment => ({
  type: types.GET_POST_ID_COMMENT,
  comment
});

export const getCommentPost = comment => dispatch => {
  commentAPI.getPostIdComments(comment.id).then(resp => {
    dispatch(receiveCommentForPost(resp));
  });
};

const sendVoteComment = comment => ({
  type: types.VOTE_COMMENT,
  comment
});

export const voteComment = comment => dispatch => {
  commentAPI.vote(comment).then(resp => {
    dispatch(sendVoteComment(resp));
  });
};

const editSingle = comment => ({
  type: types.EDIT_COMMENT,
  comment
});

export const editComment = comment => dispatch => {
  commentAPI.edit(comment).then(resp => {
    dispatch(editSingle(resp));
  });
};

const receiveComment = comment => ({
  type: types.EDIT_COMMENT_MODAL,
  comment
});
export const getComment = comment => dispatch => {
  dispatch(receiveComment(comment));
};

const receiveIdParent = comment => ({
  type: types.NEW_COMMENT_MODAL,
  comment
});

export const getParentId = comment => dispatch => {
  dispatch(receiveIdParent(comment));
};
