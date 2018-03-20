import { filters } from "../constants/ActionTypes";
import filterPost from "./filterPost";

describe("reducer filterPost", () => {
  it("should rende SORT_POST", () => {
    expect(
      filterPost([], {
        type: filters.SORT_POST,
        post: { value: "DELETED", id: "kkid" }
      })
    ).toEqual({
      value: "DELETED",
      id: "kkid"
    });
  });

  it("should rende DELETE POST", () => {
    expect(
      filterPost([], {
        type: filters.DELETED_POST,
        post: { value: "DELETED", id: "kkid" }
      })
    ).toEqual({
      value: "DELETED",
      id: "kkid"
    });
  });

  it("should rende EQUAL ZERO", () => {
    expect(
      filterPost([], {
        type: "",
        comment: { value: "DELETED", id: "kkid" }
      })
    ).toEqual([]);
  });
});
