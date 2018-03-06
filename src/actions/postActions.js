import postAPI from "../api/postAPI";
import * as types from "../constants/ActionTypes";

const sort = atributes => ({
  type: types.SORT_POST,
  atributes
});

export const sortPost = atributes => dispatch => {
  dispatch(sort(atributes));
};

const receivePost = post => ({
  type: types.EDIT_POST_MODAL,
  post
});

export const getPost = post => dispatch => {
  dispatch(receivePost(post));
};

const receiveCount = id => ({
  type: types.COUNT_COMMENT_POST,
  id
});

export const getCountComment = id => dispatch => {
  dispatch(receiveCount(id));
};

const add = post => ({
  type: types.ADD_POST,
  post
});

export const addPost = post => dispatch => {
  postAPI.create(post).then(resp => {
    dispatch(add(resp));
    dispatch(getPost({}));
  });
};

const vote = post => ({
  type: types.VOTE_POST,
  post
});

export const votePost = post => dispatch => {
  postAPI.vote(post).then(resp => {
    dispatch(vote(resp));
  });
};

const receivePostCategory = post => ({
  type: types.GET_ALL_POST_CATEGORY,
  post
});

export const getPostAllCategory = post => dispatch => {
  postAPI.getAllPostCategory(post).then(resp => {
    dispatch(receivePostCategory(resp));
  });
};

const deletePost = post => ({
  type: types.DELETE_POST,
  post
});

export const removePost = post => dispatch => {
  postAPI.remove(post.id).then(resp => {
    dispatch(deletePost(resp));
  });
};

const receiveAllPost = post => ({
  type: types.GET_ALL_POST,
  post
});

export const getAllPost = () => dispatch => {
  postAPI.getAllPost().then(post => {
    dispatch(receiveAllPost(post));
  });
};

const editSinglePost = post => ({
  type: types.EDIT_POST,
  post
});

export const editPost = post => dispatch => {
  postAPI.edit(post).then(resp => {
    dispatch(editSinglePost(resp));
  });
};

const receiveIdPost = post => ({
  type: types.GET_POST_ID,
  post
});

export const getPostId = post => dispatch => {
  postAPI.getId(post.id).then(resp => {
    dispatch(receiveIdPost(resp));
  });
};
