import { filters } from "../constants/ActionTypes";
import filterComment from "./filterComment";

describe("reducer filterComment", () => {
  it("should rende DELETED_COMMENT", () => {
    expect(
      filterComment([], {
        type: filters.DELETED_COMMENT,
        comment: { value: "DELETED", id: "kkid" }
      })
    ).toEqual({
      value: "DELETED",
      id: "kkid"
    });
  });

  it("should rende PARENT_DELETED_COMMENT", () => {
    expect(
      filterComment([], {
        type: filters.PARENT_DELETED_COMMENT,
        comment: { value: "DELETED", id: "kkid" }
      })
    ).toEqual({
      value: "DELETED",
      id: "kkid"
    });
  });

  it("should rende EQUAL ZERO", () => {
    expect(
      filterComment([], {
        type: "",
        comment: { value: "DELETED", id: "kkid" }
      })
    ).toEqual([]);
  });

  it("should rende EQUAL Z", () => {
    expect(
      filterComment([{ valuew: "DELETED", id: "jdudj" }], {
        type: "",
        comment: ""
      })
    ).toEqual([{ valuew: "DELETED", id: "jdudj" }]);
  });
});
