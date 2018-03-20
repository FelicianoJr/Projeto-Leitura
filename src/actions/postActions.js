import postAPI from "../api/postAPI";
import * as types from "../constants/ActionTypes";
import { parentDeleteComment, getCommentPost } from "./commentActions";

const sort = post => ({
  type: types.filters.SORT_POST,
  post: { value: post }
});

export const sortPost = post => dispatch => {
  dispatch(sort(post));
};

const deletePost = post => ({
  type: types.DELETE_POST,
  post
});

const deletedFilterPost = post => ({
  type: types.filters.DELETED_POST,
  post: { deleted: post.deleted, value: "DELETED" }
});

export const removePost = post => dispatch => {
  postAPI
    .remove(post.id)
    .then(resp => {
      dispatch(deletePost(resp));
      dispatch(deletedFilterPost(resp));
      dispatch(parentDeleteComment(resp));
    })
    .catch(error => console.log(error));
};

const receivePostId = post => ({
  type: types.GET_POST_ID,
  post
});

export const getPostId = post => dispatch => {
  postAPI
    .getId(post.id)
    .then(resp => {
      if (!resp.error && Object.keys(resp).length !== 0) {
        dispatch(receivePostId([resp]));
        dispatch(getCommentPost({id:post.id}));
      }
    })
    .catch(error => console.log(error));
};

const add = post => ({
  type: types.ADD_POST,
  post
});

export const addPost = post => dispatch => {
  postAPI
    .create(post)
    .then(resp => {
      dispatch(add(resp));
    })
    .catch(error => console.log(error));
};

const vote = post => ({
  type: types.VOTE_POST,
  post
});

export const votePost = post => dispatch => {
  postAPI
    .vote(post)
    .then(resp => {
      dispatch(vote(resp));
    })
    .catch(error => console.log(error));
};

const receivePostCategory = post => ({
  type: types.GET_ALL_POST_CATEGORY,
  post
});

export const getPostAllCategory = post => dispatch => {
  postAPI
    .getAllPostCategory(post)
    .then(resp => {
      dispatch(receivePostCategory(resp));
    })
    .catch(error => console.log(error));
};

const receiveAllPost = post => ({
  type: types.GET_ALL_POST,
  post
});

export const getAllPost = () => dispatch => {
  postAPI
    .getAllPost()
    .then(post => {
      dispatch(receiveAllPost(post));
    })
    .catch(error => console.log(error));
};

const editSinglePost = post => ({
  type: types.EDIT_POST,
  post
});

export const editPost = post => dispatch => {
  postAPI
    .edit(post)
    .then(resp => {
      dispatch(editSinglePost(resp));
    })
    .catch(error => console.log(error));
};
