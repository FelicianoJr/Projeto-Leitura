import { filters } from "../constants/ActionTypes";
import filterPost from "./filterPost";

describe("reducer filterPost", () => {

  it("should handle the initial state", () => {
    expect(
      filterPost([], {})
    ).toEqual([]);
  });

  it("should handle SORT_POST", () => {
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

  it("should handle DELETE POST", () => {
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
});
