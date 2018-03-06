import { combineReducers } from "redux";
import categories from "./category";
import post from "./post";
import editor from "./editor";
import comment from "./comment";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  categories,
  post,
  editor,
  comment,
  form: formReducer
});
