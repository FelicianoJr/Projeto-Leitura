import comment from "./comment";
import * as types from "../constants/ActionTypes";
import { commentMock, commentsMock } from "../mocks/mock";

describe("reducers comment", () => {
  it("should handle ADD_COMMENT", () => {
    expect(
      comment([], {
        type: types.ADD_COMMENT,
        comment: commentMock
      })
    ).toEqual([
      {
        id: "894",
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "thingtwo"
      }
    ]);
  });

  it("should handle DELETE_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.DELETE_COMMENT,
        comment: { id: "895" }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6
      }
    ]);
  });

  it("should handle VOTE_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.VOTE_COMMENT,
        comment: { id: "895", voteScore: 1 }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1
      }
    ]);
  });

  it("should handle EDIT_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.EDIT_COMMENT,
        comment: { id: "895", timestamp: 1468166872634, body: "new edit" }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "new edit",
        author: "one",
        voteScore: 1
      }
    ]);
  });

  it("should handle GET_COMMENT_ID", () => {
    expect(
      comment([], {
        type: types.GET_COMMENT_ID,
        comment: commentsMock
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1
      }
    ]);
  });

  it("should handle GET_POST_ID_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.GET_POST_ID_COMMENT,
        comment: commentsMock
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1
      }
    ]);
  });
});
