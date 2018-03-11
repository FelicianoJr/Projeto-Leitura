import categoryAPI from "../api/categoryAPI";
import * as types from "../constants/ActionTypes";

const receiveCategory = categories => ({
  type: types.ALL_CATEGORY,
  categories
});

export const getCategoryAll = () => dispatch => {
  categoryAPI
    .getAll()
    .then(categories => {
      dispatch(receiveCategory(categories));
    })
    .catch(resp => {
      throw new Error(resp);
    });
};
