import categoryAPI from "../api/categoryAPI";
import * as types from "../constants/ActionTypes";

export const getCategoryAll = () => dispatch => {
  categoryAPI
    .getAll()
    .then(categories => {
      dispatch(receiveCategory(categories));
    })
    .catch(error => console.log(error));
};

const receiveCategory = categories => ({
  type: types.ALL_CATEGORY,
  categories
});