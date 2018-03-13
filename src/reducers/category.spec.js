import * as types from "../constants/ActionTypes";
import category from "./category";

const categories = [
  {
    name: "react",
    path: "react"
  },
  {
    name: "redux",
    path: "redux"
  }
];

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

  it("should handle ALL_CATEGORY Empty", () => {
    expect(
      category(categories, {
        type: types.ALL_CATEGORY,
        categories: []
      })
    ).toEqual([]);
  });

});
