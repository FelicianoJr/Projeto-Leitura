import * as types from "../constants/ActionTypes";

export const getComment = comment => dispatch => {
  dispatch(receiveComment(comment));
};

const receiveComment = comment => ({
  type: types.COMMENT_MODAL,
  comment
});

export const getPost = post => dispatch => {
  dispatch(receivePost(post));
};

const receivePost = post => ({
  type: types.POST_MODAL,
  post
});