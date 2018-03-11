import * as types from "../constants/ActionTypes";
import editModal from "./editModal";

describe("reducer EDITMODAL", () => {
  it("should rende POST_MODAL", () => {
    expect(
      editModal([], {
        type: types.POST_MODAL,
        post: { id: "894", timestamp: 1468166872634 }
      })
    ).toEqual({
      post: {
        id: "894",
        timestamp: 1468166872634
      }
    });
  });

  it("should rende COMMENT_MODAL", () => {
    expect(
      editModal([], {
        type: types.COMMENT_MODAL,
        comment: { id: "895", timestamp: 1468166872634 }
      })
    ).toEqual({
      comment: {
        id: "895",
        timestamp: 1468166872634
      }
    });
  });
});
