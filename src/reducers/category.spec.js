import * as types from "../constants/ActionTypes";
import category from "./category";

describe("reducers CATEGORY", () => {
  let categories;
  beforeEach(() => {
    categories = [
      {
        name: "react",
        path: "react"
      },
      {
        name: "redux",
        path: "redux"
      }
    ];
  });

  it("should handle initial state", () => {
    expect(category([], {})).toEqual([]);
  });

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
