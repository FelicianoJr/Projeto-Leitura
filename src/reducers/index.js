import { combineReducers } from "redux";
import categories from "./category";
import post from "./post";
import editModal from "./editModal";
import comment from "./comment";
import filterPost from "./filterPost";
import filterComment from "./filterComment";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  categories,
  post,
  editModal,
  comment,
  filterPost,
  filterComment,
  form: formReducer
});
