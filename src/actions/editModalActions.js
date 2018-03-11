import * as types from "../constants/ActionTypes";

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

  const receivePost = post => ({
    type: types.EDIT_POST_MODAL,
    post
  });
  
  export const getPost = post => dispatch => {
    dispatch(receivePost(post));
  };