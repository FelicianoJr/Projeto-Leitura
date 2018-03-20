import * as types from "../constants/ActionTypes";

const receiveComment = comment => ({
  type: types.COMMENT_MODAL,
  comment
});

export const getComment = comment => dispatch => {
  dispatch(receiveComment(comment));
};

const receivePost = post => ({
  type: types.POST_MODAL,
  post
});

export const getPost = post => dispatch => {
  dispatch(receivePost(post));
};
