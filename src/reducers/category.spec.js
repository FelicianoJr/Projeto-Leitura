import * as types from "../constants/ActionTypes";
import category from "./category";
import {categories} from "../mocks/mock"


describe("reducers CATEGORY", () => {

  it("should handle ALL_CATEGORY", () => {
    expect(
      category([], {
        type: types.ALL_CATEGORY,
        categories: categories
      })
    ).toEqual([
      {
        name: "react",
        path: "react"
      },
      {
        name: "redux",
        path: "redux"
      }
    ]);
  });
});
